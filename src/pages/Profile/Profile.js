import React, {useContext, useEffect} from "react";
import {GithubContext} from "../../context/github/GithubContext";
import {Repos} from "../../components/Repos";
import classes from "./Profile.module.css";

export const Profile = ({match}) => {
  const {getUser, getRepos, repos, user} = useContext(GithubContext)
  const urlName = match.params.name

  useEffect(() => {
    getUser(urlName)
    getRepos(urlName)
    // eslint-disable-next-line
  }, [])

  const {
    login, avatar_url, name,
    html_url, company, blog,
    followers, following, location,
    public_gists, public_repos, bio
  } = user

  return (
    <>
      <div className={`card mb-4 ${classes.Profile}`}>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-3 text-center">
              <img src={avatar_url} alt={name} width='150'/>
              <h1>{name}</h1>
              {location && <p>Местоположение: {location}</p>}
            </div>
            <div className="col">
              {bio && <>
                <h3>BIO</h3>
                <p>{bio}</p>
              </>}
              <ul>
                {login && <li><strong>Юзернейм:</strong> {login}</li>}
                {company && <li><strong>Компания:</strong> {company}</li>}
                {blog && (
                  <li>
                    <strong>Веб-сайт: </strong>
                    <a href={blog} target='_blank' rel='noreferrer noopener'>{blog.slice(7)}</a>
                  </li>
                )}
              </ul>
              <span className="badge badge-primary">Подписчиков: {followers}</span>
              <span className="badge badge-success">Подписан: {following}</span>
              <span className="badge badge-secondary">Репозитории: {public_repos}</span>
              <span className="badge badge-warning mb-4">Gists: {public_gists}</span>
              <br/>
              <a
                href={html_url}
                target='_blank'
                className='btn btn-dark'
                rel="noopener noreferrer"
              >
                Открыть профиль
              </a>
            </div>
          </div>
        </div>
      </div>
      <h3 className='mb-4'>Репозитории</h3>
      <Repos repos={repos}/>
    </>
  )
}