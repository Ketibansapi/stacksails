module.exports = {


  friendlyName: 'Delete',


  description: 'Delete post.',


  inputs: {
    postId: {
      type: 'string',
      required: true
    }
  },


  exits: {
    invalid: {
      description: 'This not invalid'
    }
  },


  fn: async function (inputs) {
    console.log('Delete post action')

    console.log("Try to delete post id: " + inputs.postId)

    const record = await Post.destroy({id: inputs.postId}).fetch()
    console.log(record)

    if (record.length == 0) {
      throw({invalid: {error: 'Record doesnt exist'}})
    }

    return record;

  }


};
