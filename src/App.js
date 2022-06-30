import React, { useState } from 'react';
import BookmarkForm from './components/BookmarkForm';
import './App.css';

const URLS = [{
  url: "http://google.com",
  title: "Google",
  tag: "Search Tags"
},
{
  url: "http://github.com",
  title: `GitHub`,
  tag: `Post Tags`
}]

export default function App() {

    const [bookmarks, setBookmarks] = useState(URLS);
    const [filter, setFilter] = useState(null);

    const addBookmark = (bookmark) => {
        setBookmarks([...bookmarks, bookmark]);
    }

    const tags = [...new Set(bookmarks.map(bookmark => bookmark.tag))];
    
    const urlTags = tags.map((tag) => (
        <button key={tag} type="button" value={tag} onClick={() => setFilter(tag)}>{tag}</button>
    ));

    const filteredBookmarks = bookmarks
    .filter(bookmark => filter ? bookmark.tag === filter : bookmark)
    .map((bookmark, index) => (
        <div key={index} className="url-list-container">
            <p>{bookmark.title}</p>
            <a href={bookmark.url}>{bookmark.url}</a>
        </div>
    ));

    return(
        <div class="container">
            <div><BookmarkForm addBookmark={addBookmark} />
            <button type="button" value="All" onClick={() => setFilter(null)}>All Tags</button>
            {urlTags}
            </div>
            <div>{filteredBookmarks}</div>
        </div>
    )
}