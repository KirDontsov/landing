import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import Article from "../components/Article";

class News extends Component {
	constructor(props) {
		super(props);

		this.state = {
			articles: []
		};
	}

	componentDidMount() {
		const url =
			"https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=f22bcc2fb9a54185b76491b9c353d894";
		fetch(url)
			.then((res) => res.json())
			.then((el) => this.setState({ articles: el.articles }));
	}

	render() {
		return (
			<Fragment>
				<Helmet>
					<title>Новости</title>
					<meta name="description" content="Новости" />
				</Helmet>
				<div className="container__margin">
					<div className="heading">
						<h1 className="title">News</h1>
					</div>
					<div className="container">
						{this.state.articles.map((article, index) => (
							<Article
								key={index}
								title={article.title}
								description={article.description}
								url={article.url}
								author={article.author}
								urlToImage={article.urlToImage}
							/>
						))}
					</div>
				</div>
			</Fragment>
		);
	}
}

export default News;
