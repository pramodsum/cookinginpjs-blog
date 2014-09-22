class Image < ActiveRecord::Base
  belongs_to :post
  has_attached_file :file, :styles => { :thumb => "140>x140" }
end
