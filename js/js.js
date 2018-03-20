const API_POSTS = 'https://jsonplaceholder.typicode.com/posts';
const API_COMMENTS = 'https://jsonplaceholder.typicode.com/comments';
const API_USERS = 'https://jsonplaceholder.typicode.com/users';

let name = '';
let url = window.location.href;
let postID = parseInt( url.substring(url.indexOf('?postID=') + 8))
let userID = parseInt( url.substring(url.indexOf('?userID=') + 8))

 	if (!postID && !userID) {
		fetch(API_POSTS)
		  	.then(response => response.json())
		  	.then(posts => fetch(API_USERS)
			  	.then(response => response.json())
			  	.then(users =>   
					$.each(posts, (posts, post) => {
						let name = users.filter((user) => {
						  	return post.userId === user.id
						});
				  		$('#posts').append(
					  		'<div class="post-block"><b>Post:</b> <a class="post" href="index.html?postID='+ post.id +'" >' + 
					  		post.body +'</a> <b class="one-line">Post creator: </b> <a class="name one-line" href="index.html?userID='+
					  		post.userId +'">' + name[0].name +'</a></div>'
					  	);
				  	})
			  	)
			  	.catch(error => console.error(error))
		  	)
		  	.catch(error => console.error(error));

			$('#posts').show();
	}


  	if (postID) {
		fetch(API_POSTS + "/"  + postID)
		  	.then(response => response.json())
		  	.then(post => fetch(API_USERS + '/' + post.userId)
		  		.then(response => response.json())
		  		.then(user => { 
		  			$('#comments .post').append(
		  				'<p>' + post.body +'</p>'
		  			); 

				  	$('#comments .post').append(
				  		'<b class="one-line">Post creator: </b> <a class="name one-line" href="index.html?userID='+
				  		post.userId +'" >' + user.name +'</a>'
				  	); 
				})
				.catch(error => console.error(error))
			)
		  	.catch(error => console.error(error));
		  	
		

		fetch(API_COMMENTS + "?postId=" + postID)
		  	.then(response => response.json())
		  	.then(comments => $.each(comments, function(comments, id) { 
				  	$('#comments .comments').append('<div class="comment"> <p>' + id.body +
				  	'</p><b class="one-line">From:</b><p class="one-line">' + id.email +'</p>  </div>'); 
			})
		  	)
		  	.catch(error => console.error(error));

		$('#comments').append('<a href="index.html">Return</p>'); 

		$('#comments').show();
	}


	if (userID) {

		fetch(API_USERS + '/' + userID)
		  	.then(response => response.json())
		  	.then(info =>  {
				  	$('#creators .name').append('<p  class="one-line">' + info.name +'</p>'); 
				  	$('#creators .username').append('<p  class="one-line">' + info.username +'</p>');
				  	$('#creators .email').append('<p  class="one-line">' + info.email +'</p>');
				  	$('#creators .address').append('<p  class="one-line">' + info.address.street + info.address.suite + 
				  	', ' + info.address.city +'</p>');
				  	
			})	
		  	.catch(error => console.error(error));

		fetch(API_POSTS + '?userId=' + userID)
		  	.then(response => response.json())
		  	.then(posts => $.each(posts, function(posts, id) { 
		  			$('#creators .all-comments').append('<a class="post" href="index.html?postID='+ id.id +'" >' + 
		  			id.body +'</a>'); 
		  		})
			)

		  	.catch(error => console.error(error));

		$('#creators').append('<a href="index.html">Return</p>'); 

		$('#creators').show();

	}



