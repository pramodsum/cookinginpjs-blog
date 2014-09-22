ActiveAdmin.register Post do

  controller do
    # Never trust parameters from the scary internet, only allow the white list through.
    def post_params
      params.require(:post).permit(:title, :body, :comment, :author, :author_id)
    end

    # GET /posts/new
    def new
      @post = Post.new
    end

    # GET /posts/1/edit
    def edit
    end

    # POST /posts
    # POST /posts.json
    def create
      @post = Post.new(post_params)

      respond_to do |format|
        if @post.save
          format.html { redirect_to @post, notice: 'Post was successfully updated.' }
          format.json { render :show, status: :ok, location: @post }
        else
          format.html { render :new }
          format.json { render json: @post.errors, status: :unprocessable_entity }
        end
      end
    end

    # PATCH/PUT /posts/1
    # PATCH/PUT /posts/1.json
    def update
      @post = Post.find params[:id]
      respond_to do |format|
        if @post.update(post_params)
          format.html { redirect_to @post, notice: 'Post was successfully updated.' }
          format.json { render :show, status: :ok, location: @post }
        else
          format.html { render :edit }
          format.json { render json: @post.errors, status: :unprocessable_entity }
        end
      end
    end

    # DELETE /posts/1
    # DELETE /posts/1.json
    def delete
      @post = Post.find params[:id]
      @post.destroy
      respond_to do |format|
        format.html { redirect_to posts_url, notice: 'Post was successfully destroyed.' }
        format.json { head :no_content }
      end
    end
  end
end
