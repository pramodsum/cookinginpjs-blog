class PostsController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :destroy]
  before_filter :authenticate, :except => [ :index, :show ]

  # GET /posts
  # GET /posts.json
  def index
    @posts = Post.order("created_at").all
  end

  # GET /posts/1
  # GET /posts/1.json
  def show
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def post_params
      params.require(:post).permit(:title, :body)
    end

    def authenticate
      authenticate_or_request_with_http_basic do |name, password|
        name == "admin" && password == "secret"
      end
    end
end
