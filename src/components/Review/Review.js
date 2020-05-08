import React, { Component } from 'react';
import './style.scss';

export default class Review extends Component {
	state = {
		users: [],
		posts: [],
		postId: null
	};

	componentDidMount() {
		this.getDate();
	}

	getDate = () => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => this.setState({ users }));
	};

	handleSeePosts = (id) => {
		fetch(`https://jsonplaceholder.typicode.com/posts/?userId=${id}`)
			.then((response) => response.json())
			.then((posts) => {
				this.setState({
					posts,
					postId: id
				});
			});
	};

	render() {
		const { users, posts, postId } = this.state;
		const { isOpen } = this.props;

		const showPosts = () => {
			if (posts) {
				return posts.map((item) => {
					return <li key={item.id}>{item.title}</li>;
				});
			} else {
				return <div>Loading ...</div>;
			}
		};
		return (
			<div className={isOpen ? 'side-bar-section open' : 'side-bar-section closed'}>
				<ul>
					{users.map((item) => {
						return (
							<li key={item.id}>
                <div>
                  <span>{item.name}</span>
                  <button className="btn btn-success" onClick={() => this.handleSeePosts(item.id)}>
                    See Posts
                  </button>
                </div>
								<ul>{postId === item.id && showPosts()}</ul>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}
