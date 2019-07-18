// Dumb Database
const post1 = {id: 1, 
    title: 'This is title', 
    body: 'Here is the body'}

const post2 = {id: 2, 
    title: 'This is title2', 
    body: 'Here is the body2'} 

const post3 = {id: 3, 
    title: 'This is title3', 
    body: 'Here is the body3'}      


const allPosts = [post1, post2, post3]    

module.exports = {
    posts: function (req, res) {
        res.send(allPosts)
    },

    create: function (req, res) {
        const title = req.param('title')
        const body = req.param('body')
        console.log(title + " " + body)

        sails.log.warn(title + " " + body)
        

        const newPost = {id: 4, 
            title: title, 
            body: body}
        allPosts.push(newPost)

        res.end()
    },

    findById: function (req, res) {
        const postId = req.param('postId')

        const filteredPosts = allPosts
            .filter (p => { return p.id == postId })

        if (filteredPosts.length > 0 ) {
            res.send (filteredPosts[0])
        } else {
            res.send ('Fail to find id:' + postId)
        }
    }
}