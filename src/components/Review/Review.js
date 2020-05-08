import React, { Component } from 'react';
import './style.scss';
import { Loading } from '../Loading/Loading';

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
		if (this.state.postId === id) {
			return;
		}
		this.setState({ postId: id, posts: [] });
		fetch(`https://jsonplaceholder.typicode.com/posts/?userId=${id}`)
			.then((response) => response.json())
			.then((posts) => {
				this.setState({ posts });
			});
	};

	render() {
		const { users, posts, postId } = this.state;
		const { isOpen } = this.props;

		return (
			<div className={isOpen ? 'side-bar-section open' : 'side-bar-section closed'}>
				<ul>
					{users.length === 0 && <Loading />}
					{users.map((item) => {
						return (
							<li key={item.id}>
								<div>
									<span>{item.name}</span>
									<button className="btn btn-success" onClick={() => this.handleSeePosts(item.id)}>
										See Posts
									</button>
								</div>
								<ul>
									{postId === item.id ? posts.length === 0 ? (
										<Loading />
									) : (
										posts.map((item) => {
											return <li key={item.id}>{item.title}</li>;
										})
									) : (
										''
									)}
								</ul>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}
