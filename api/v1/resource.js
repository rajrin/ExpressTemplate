/**
 * Each resource resides in its own module.
 * This template may be used for creating the API for Resources & Non-Resources
 * 
 * This is fun
 * 
 * References:
 *      https://expressjs.com/en/guide/routing.html
 */

// As a best practice keep the resource name same as the file name
var RESOURCE_NAME = 'resource';
var VERSION = 'v1';
var URI = '/' + VERSION + '/' + RESOURCE_NAME; 

module.exports = function(router){
    'use strict';

    // RETRIEVE Collection = GET
    router.route(URI).get(function(req, res,next){
        res.send('hello get collection')
    });

    // RETRIEVE Specific Resource = GET with id
    // If the value of :id='search' then let it pass to the next handler
    router.route(URI+'/:id').get(function(req, res,next){
        if(req.params.id === 'search') next();
        else 
            res.send('hello get with id='+req.params.id)
    });

    // RETRIEVE Collection with QUERY Parameters = GET with ?
    // URI would be    /v1/resource/search
    router.route(URI+'/search').get(function(req, res,next){
        res.send('hello get query with q='+ req.query['q'])
    });

    // CREATE = POST
    router.route(URI).post(function(req,res,next){
        if(!isDocumentValid(req.body)){
            res.send('Document create request failed')
        } else {
            res.send('Document create request success');
        }
    });

    // UPDATE = PUT
     router.route(URI).put(function(req,res,next){
        if(!isDocumentValid(req.body)){
            res.send('Document update request failed')
        } else {
            res.send('Document update request success');
        }
    });

    // DELETE = DELETE
     router.route(URI).delete(function(req,res,next){
        if(!isDeleteOk(req.body)){
            res.send('Document delete request failed')
        } else {
            res.send('Document delete request success');
        }
    });
   

    // VALIDATION of document - specific to the resource
    var isDocumentValid = function(doc){
        // provid the logic for VALIDATION
        
        return doc.success;
    }

    // IS DELETE OK - check if the request for deleting the document is OK
    var isDeleteOk = function(doc){
        // provide the logic for checking

        return doc.success;
    }

}