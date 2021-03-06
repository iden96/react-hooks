import React from 'react'

function Repos({repos}) {
    return (
        <>
            {
                repos.map(repo => {
                    return (<div className="card mb-3" key={repo.id}>
                        <div className="card-body">
                            <h5>
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
                            </h5>
                        </div>
                    </div>)
                })
            }   
        </>
    )
}

export default Repos