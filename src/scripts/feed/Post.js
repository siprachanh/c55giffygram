

//create the hTML representation of a single post
  export const Post = (postObject) => {
    return `
      <section class="post">
        <header>
            <h2 class="post__title">${postObject.title}</h2>
        </header>
        <img class="post__image" src="${postObject.imageURL}" />
        <h4 class="post__description"> ${postObject.description}</h4>
        <p> ${postObject.timestamp}</p>
        <p> ${postObject.userId}</p>
        <div><button id="edit--${postObject.id}">Edit</button></div>

      </section>
    `
  }
  