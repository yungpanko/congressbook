import React from 'react'
import { Feed } from 'semantic-ui-react'

const RecentStatements = ({ statements }) => {
  const display = statements.map(statement => (
    <Feed.Event key={statement.title}>
      <Feed.Label>
      </Feed.Label>
      <Feed.Content>
        <Feed.Summary>
           {statement.date}: <a href={statement.url} target='_blank'>{statement.title.replace(/&#39;/g,"'").replace(/&quot;/g,"'")}</a>
        </Feed.Summary>
        <Feed.Meta>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
  ))
  return (
    <div>

      <Feed>
        {display}
      </Feed>
    </div>
  )
}

export default RecentStatements
