import React, {useState} from 'react';
export default function BookmarkForm({addBookmark}) {


    const [url, setUrl] = useState(``);
    const [title, setTitle] = useState(``);
    const [tag, setTag] = useState(``);

    const handleSubmit = (e) => {
        e.preventDefault();
        addBookmark({
            url,
            title,
            tag,
        });
        setUrl('');
        setTitle('');
        setTag('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <label></label>
            <input type="text" value={title} placeholder="Enter Name of Site" onChange={(e) => setTitle(e.target.value)}/>
            <label></label>
            <input type="url" value={url} placeholder="Enter URL" onChange={(e) => setUrl(e.target.value)}/>
            <label></label>
            <input type="text" value={tag} placeholder="Enter Tag" onChange={(e) => setTag(e.target.value)}/>
            <button class="add-bookmark" type='submit'>Add bookmark</button>
            <br />
            <div></div>
        </form>
    )
}