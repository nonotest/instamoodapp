package commands

type QuotableQuote struct {
	ID      string `json:"_id"`
	Content string `json:"content"`
	Author  string `json:"author"`
}

type QuotableListResponse struct {
	Count         int             `json:"count"`
	TotalCount    int             `json:"totalCount"`
	LastItemIndex int             `json:"lastItemIndex"`
	Results       []QuotableQuote `json:"results"`
}

type QuotableRequestParams struct {
	Limit int `url:"limit"`
	Skip  int `url:"skip"`
}

type QuotableError struct{}
