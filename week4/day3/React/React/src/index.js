import React from 'react';
import { render } from 'react-dom';
const API = 'https://api.github.com/users';
class App extends React.Component {
    constructor(props) {
        console.log('App - constructor')
        super(props)
        this.state = {
            username: 'o6x9',
            name: '',
            avatar: '',
            location: '',
            repos: '',
            followers: '',
            following: '',
            homeUrl: '',
            notFound: '',
            loading: false
        }
    }
    fetchProfile(username) {
        this.setState({
            loading: true
        })
        let url = `${API}/${username}`;
        setTimeout(() => {
            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    this.setState({
                        username: data.login,
                        name: data.name,
                        avatar: data.avatar_url,
                        location: data.location,
                        repos: data.public_repos,
                        followers: data.followers,
                        following: data.following,
                        homeUrl: data.html_url,
                        notFound: data.message,
                        loading: false
                    })
                })
                .catch((error) => console.log('Oops! . There Is A Problem'))
        }, 3000)
    }
    componentDidMount() {
        this.fetchProfile(this.state.username)
    }
    render() {
        console.log('App - render')
        return (
            <div>
                {this.state.loading && <p>Loading...</p>}
                <section id="card">
                    <Profile data={this.state} />
                </section>
            </div>
        )
    }
}
class Profile extends React.Component {
    constructor(props) {
        super(props)
        console.log('Profile - constructor')
    }
    render() {
        console.log('Profile - render')
        let data = this.props.data;
        let followers = `${data.homeUrl}?tab=followers`;
        let repositories = `${data.homeUrl}?tab=repositories`;
        let following = `${data.homeUrl}?tab=following`;
        return (
            <section className="github--profile">
                <div className="github--profile__info">
                    <a
                        href={data.homeUrl}
                        target="_blank"
                        title={data.name || data.username}
                    >
                        <img src={data.avatar} alt={data.username} />
                    </a>
                    <h2>
                        <a href={data.homeUrl} title={data.username} target="_blank">
                            {data.name || data.username}
                        </a>
                    </h2>
                </div>
                <div className="github--profile__state">
                    <ul>
                        <li>
                            <a href={followers} target="_blank" title="Number Of Followers">
                                <i>{data.followers}</i>
                                <span>Followers</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href={repositories}
                                target="_blank"
                                title="Number Of Repository"
                            >
                                <i>{data.repos}</i>
                                <span>Repository</span>
                            </a>
                        </li>
                        <li>
                            <a href={following} target="_blank" title="Number Of Following">
                                <i>{data.following}</i>
                                <span>Following</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}
render(
    <App />,
    document.getElementById('root')
)