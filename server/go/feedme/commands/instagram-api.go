package commands

// IGRequestParams params to pass ig api.
type IGRequestParams struct {
	ISJson int `url:"__a"`
}

type IGEdge struct {
	Node IGNode `json:"node"`
}

type IGNode struct {
	Typename           string `json:"__typename"`
	ID                 string `json:"id"`
	EdgeMediaToCaption struct {
		Edges []struct {
			Node struct {
				Text string `json:"text"`
			} `json:"node"`
		} `json:"edges"`
	} `json:"edge_media_to_caption"`
	Shortcode          string `json:"shortcode"`
	EdgeMediaToComment struct {
		Count int `json:"count"`
	} `json:"edge_media_to_comment"`
	TakenAtTimestamp int `json:"taken_at_timestamp"`
	Dimensions       struct {
		Height int `json:"height"`
		Width  int `json:"width"`
	} `json:"dimensions"`
	DisplayURL  string `json:"display_url"`
	EdgeLikedBy struct {
		Count int `json:"count"`
	} `json:"edge_liked_by"`
	EdgeMediaPreviewLike struct {
		Count int `json:"count"`
	} `json:"edge_media_preview_like"`
	Owner struct {
		ID string `json:"id"`
	} `json:"owner"`
	ThumbnailSrc       string `json:"thumbnail_src"`
	ThumbnailResources []struct {
		Src          string `json:"src"`
		ConfigWidth  int    `json:"config_width"`
		ConfigHeight int    `json:"config_height"`
	} `json:"thumbnail_resources"`
	IsVideo              bool   `json:"is_video"`
	AccessibilityCaption string `json:"accessibility_caption"`
}

// IGResponse is ig api response.
type IGResponse struct {
	Graphql struct {
		Hashtag struct {
			ID                 string `json:"id"`
			Name               string `json:"name"`
			AllowFollowing     bool   `json:"allow_following"`
			IsFollowing        bool   `json:"is_following"`
			IsTopMediaOnly     bool   `json:"is_top_media_only"`
			ProfilePicURL      string `json:"profile_pic_url"`
			EdgeHashtagToMedia struct {
				Count    int `json:"count"`
				PageInfo struct {
					HasNextPage bool   `json:"has_next_page"`
					EndCursor   string `json:"end_cursor"`
				} `json:"page_info"`
				Edges []IGEdge `json:"edges"`
			} `json:"edge_hashtag_to_media"`
			EdgeHashtagToTopPosts struct {
				Edges []IGEdge `json:"edges"`
			} `json:"edge_hashtag_to_top_posts"`
		} `json:"hashtag"`
	} `json:"graphql"`
}

// IGError ig api error
type IGError struct{}

/*
struct {
					Node struct {
						CommentsDisabled   bool   `json:"comments_disabled"`
						Typename           string `json:"__typename"`
						ID                 string `json:"id"`
						EdgeMediaToCaption struct {
							Edges []struct {
								Node struct {
									Text string `json:"text"`
								} `json:"node"`
							} `json:"edges"`
						} `json:"edge_media_to_caption"`
						Shortcode          string `json:"shortcode"`
						EdgeMediaToComment struct {
							Count int `json:"count"`
						} `json:"edge_media_to_comment"`
						TakenAtTimestamp int `json:"taken_at_timestamp"`
						Dimensions       struct {
							Height int `json:"height"`
							Width  int `json:"width"`
						} `json:"dimensions"`
						DisplayURL  string `json:"display_url"`
						EdgeLikedBy struct {
							Count int `json:"count"`
						} `json:"edge_liked_by"`
						EdgeMediaPreviewLike struct {
							Count int `json:"count"`
						} `json:"edge_media_preview_like"`
						Owner struct {
							ID string `json:"id"`
						} `json:"owner"`
						ThumbnailSrc       string `json:"thumbnail_src"`
						ThumbnailResources []struct {
							Src          string `json:"src"`
							ConfigWidth  int    `json:"config_width"`
							ConfigHeight int    `json:"config_height"`
						} `json:"thumbnail_resources"`
						IsVideo              bool   `json:"is_video"`
						AccessibilityCaption string `json:"accessibility_caption"`
					} `json:"node,omitempty"`
*/
