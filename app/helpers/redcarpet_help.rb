module RedcarpetHelper
  def markdown(text)
    Redcarpet::Markdown.new(HTMLBlockCode.new(:hard_wrap => true), :space_after_headers => true, :autolink => true, :strikethrough => true, :superscript => true).render(text).html_safe
  end
end

class HTMLBlockCode < Redcarpet::Render::HTML
  include Sprockets::Helpers::RailsHelper
  include Sprockets::Helpers::IsolatedHelper
  include ActionView::Helpers::UrlHelper

  def parse_media_link(link)
    matches = link.match(/^(\w+)?\|([\w\s\d]+)?/)
    {
      :size => (matches[1] || 'original').to_sym,
      :class => matches[2]
    } if matches
  end

  def image(link, alt_text, title)
    size = nil
    klass = nil

    if nil != (parse = parse_media_link(link))
    image = Image.find_by_name(title)
      if image
        size = image.file.image_size(parse[:size])
        link = image.file.url(parse[:size])
        klass = parse[:class]

        image_tag(link, :size => size, :title => title, :alt => alt_text, :class => klass)
      else
        ""
      end
    end
  end

  def link(link, title, content)
    klass = nil

    if nil != (parse = parse_media_link(link))
      image = Image.find_by_name(title)
      if image
        link = image.file.url(parse[:size])
        klass = parse[:class]

        link_to(content, link, :title => title, :class => klass)
      else
        ""
      end
    end
  end
end
