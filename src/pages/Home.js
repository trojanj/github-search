import React, {useContext} from "react";
import {Search} from "../components/Search";
import {GithubContext} from "../context/github/GithubContext";
import {Card} from "../components/Card";

export const Home = () => {
  const context = useContext(GithubContext);
  return (
    <>
      <Search/>
      <div className="row">
        {
          context.loading
            ? <p className='text-center'>Загрузка...</p>
            :  context.users.map(user => (
                <div key={user.id} className="col-lg-3 mb-4">
                  <Card user={user}/>
                </div>
              ))
         }
      </div>
    </>
  )
}
