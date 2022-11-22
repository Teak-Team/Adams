module.exports = class schemes {

    static FolderSchema = {
        name : 'Folders',
        properties : {
            _id : "objectId",
            name : "string",
            pass : "string"
        }
    }

    static PageSchema = {
        name : 'Pages',
        properties : {
            _id : "objectId",
            title : "string",
            content : "string"
        }
    }

    static UserSchema = {
        name : 'Users',
        properties : {
            _id : "objectId",
            name : "string",
            username : "string",
            pass : "string"
        }
    }

    static LogSchema = {
        name : 'Logs',
        properties : {
            _id : "objectId",
            userId : "string",
            pageId : "string",
            pass : "string",
            date : "int"
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