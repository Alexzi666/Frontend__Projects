"use strict";
const list = document.querySelector('.posts');

let posts = [];
let comments = [];
let obj = [];
let bo = true;


fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(originalPosts => {
    posts = originalPosts;
    render();
});

list.addEventListener('click', (e) => {
    e.preventDefault();
    
    if(!e.target.classList.contains('post_title') && !e.target.classList.contains('post_title_label')){
       return;
    }
    
    const comment_id = e.target.dataset.index;

    fetch(`https://jsonplaceholder.typicode.com/posts/${comment_id}/comments`)
    .then(response => response.json())
    .then(rawComments =>{
        posts[comment_id - 1].comment = rawComments;
        comments = rawComments;

        const commt = document.querySelector('.post_comment');

        commt.hidden = !commt.hidden;
       
        if(posts[comment_id - 1].isClicked === undefined){
            posts[comment_id - 1].isClicked = true;
        }
        else{
            posts[comment_id - 1].isClicked = !posts[comment_id - 1].isClicked;
            
        }



        if(commt.style.display=="none") commt.style.display="flex";
        else{commt.style.display="none"}

        obj.push(e.target.dataset.index);

        if(obj.length === 1) bo = false;
        else if(obj[obj.length-1] !== obj[obj.length-2]) bo = false;
        else if(obj[obj.length-1] === obj[obj.length - 2])bo = !bo;
        
        render();

        posts[comment_id - 1].comment = undefined;
         
    })
    
})



function render() {

    const comm = comments.map( comment =>{
        return `<div class='comment_set'>
        <li class='comment_name'><label class='comment_name_label'>comment name:   </label>${comment.name}</span>
        <li class='comment_body'><label class='comment_body_label'>comment:   </label>${comment.body}</span>
        <li class='comment_email'><label class='comment_email_label'>email address:   </label>${comment.email}</span>
        </div>`;
    }).join('');

    
    const html = posts.map( (post, index) => {
        
        
        console.log(bo + "now bo is : ")


        return `
        <li class='post_li${post.id}'>
        <h2><a href='' class='post_title' data-index='${post.id}'>Post ${post.id}'s Title :  ${post.title}</a></h2>
        <div class='post_body'><label>Post's Body --- </label>${post.body}</div>
        <ul class='post_comment' data-index='${index}' style='display : ${bo ? 'none':'block'}'>${post.comment === undefined ? '' : comm}</ul>
        </li>`
    }).join('');

    list.innerHTML = html;
}




