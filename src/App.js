import React,{useState,useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
const contentful  = require('contentful');
const client = contentful.createClient({
  space: '6e53lvm4k39v',
  accessToken: 'HlFVjWfLzb3sKSR1GuQ5EsMl9FT8f61scYI_ZykNXsY'
})

const Home = () => {
  const [blogList,setBlogList] = useState(null);
  useEffect(() => {
    client.getEntries({ content_type: 'blogs' }).then((data)=>{
      setBlogList(data.items);
    })
    .catch(console.error)
  }, []);

  return (
    <div className="container">
      <div className="row">
      <div className="col-sm-6">
        {/* {getAllBlogList()} */}
        {blogList && blogList.length>0 ?  blogList.map((item)=>{
          return ( <>
          <span>{item.fields.title} </span>
          </>
          );
          }) : null}
      </div>
    </div>
    </div>

  )
}


export default function App() {
  return (
    <Router>
      
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* <Route path="/:id">
            <BlogDetail />
          </Route>
          <Route path="/users">
            <Users />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}


