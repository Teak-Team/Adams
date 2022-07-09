module.exports = class schemes {


    static FolderSchema = {
        name : 'Folders',
        properties : {
            _id : "",
            name : "",
            pass : ""
        }
    }

    static PageSchema = {
        name : 'Pages',
        properties : {
            _id : "",
            title : "",
            content : ""
        }
    }



    /*static PostSchema = {
        name: 'Post',
        properties: {
            _id : 'objectId',
            time: 'int',
            title: 'string',
            content: 'string'
        },
        primaryKey : '_id'
    };*/

    /*const blogRealm = new Realm({
    path: 'hello.realm',
    schema: [PostSchema]
});*/


}