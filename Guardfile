guard 'rails' do
  watch('Gemfile.lock')
  watch(%r{app/helpers/.+\.rb})
  watch(%r{app/views/.+\.(erb|haml)})
  watch(%r{(public/).+\.(css|js|html)})
  watch(%r{app/assets/stylesheets/(.+\.css).*$})    { |m| "assets/#{m[1]}" }
  watch(%r{app/assets/stylesheets/(.+\.scss).*$})    { |m| "assets/#{m[1]}" }
  watch(%r{app/assets/javascripts/(.+\.js).*$}) { |m| "assets/#{m[1]}" }
  watch(%r{lib/assets/stylesheets/(.+\.css).*$})    { |m| "assets/#{m[1]}" }
  watch(%r{lib/assets/stylesheets/(.+\.scss).*$})    { |m| "assets/#{m[1]}" }
  watch(%r{lib/assets/javascripts/(.+\.js).*$}) { |m| "assets/#{m[1]}" }
  watch(%r{vendor/assets/stylesheets/(.+\.css).*$}) { |m| "assets/#{m[1]}" }
  watch(%r{vendor/assets/javascripts/(.+\.js).*$})  { |m| "assets/#{m[1]}" }
  watch(%r{config/locales/.+\.yml})
  # Rails Assets Pipeline
  watch(%r{(app|vendor)(/assets/\w+/(.+\.(css|scss|js|html|png|jpg))).*}) { |m| "/assets/#{m[3]}" }
end

