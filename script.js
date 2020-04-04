var authKey = "WL6gM7rxfUoYShV6Cbug5g1Greimmnv2"
var searchTerms = "";
var numResults 	= 0;
var startYear 	= 0;
var endYear		= 0;

var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=" + authKey;

var articleCounter = 0;

function runQuery(numArticles, queryURL) {

    $.ajax({url: queryURL, method:"GET"})
        .done(function(NYTData) {
                
            console.log(NYTData);

            for (var i=0; i<numResults; i++) {
                articleCounter++;


            $("search-term").on("click", function(){
                var api_url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=WL6gM7rxfUoYShV6Cbug5g1Greimmnv2";
            }






            const clearForm = () => {
                $("#search-term").val('');
                $("#number-records").val('');
                $("#start-year").val('');
                $("#end-year").val('');
                queryString = '';
                startYear = 0;
                endYear = 0;
                numberOfArticles = 10;
                url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
              }









        }