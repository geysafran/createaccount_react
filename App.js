import React from 'react';

export default class Apei extends React.Component {
    
    function tplawesome(e,t){res=e;for(var n=0;n<t.length;n++){res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){return t[n][r]})}return res}

    $(function() {
        $("form").on("submit", function(e) {
           e.preventDefault();
           // preaparo da lista
           var request = gapi.client.youtube.search.list({
                part: "snippet",
                type: "video",
                q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
                maxResults: 3,
                order: "viewCount",
                publishedAfter: "2015-01-01T00:00:00Z"
           }); 

           // execução do request
       request.execute(function(response) {
        var results = response.result;
        $("#results").html("");
        $.each(results.items, function(index, item) {
          $.get("tpl/item.html", function(data) {
              $("#results").append(tplawesome(data, [{"title":item.snippet.title, "videoid":item.id.videoId}]));
          });
        });
        resetVideoHeight();
     });
  });

  $(window).on("resize", resetVideoHeight);
});

function resetVideoHeight() {
    $(".video").css("height", $("#results").width() * 9/16);
}

function init() {
    gapi.client.setApiKey("");
    gapi.client.load("youtube", "v3", function() {
        // FUNCIONA!!!!
    });
}


    render() {
        return (
            <div>
                <div>
                    <h1 className="w100 text-center">
                        <a href="index.html">O Leandro é o cara</a>
                    </h1>
                </div>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <form action="#">
                            <input type="text" id="search" placeholder="Type something..." autocomplete="off" className="form-control" />
                            <input type="submit" value="Search" className="form-control btn btn-primary w100" />
                        </form>
                        <div id="results"></div>
                    </div>
                </div>
                
                {/* <!-- scripts -->
                <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
                <script src="js/app.js"></script>
                <script src="https://apis.google.com/js/client.js?onload=init"></script> */}
            </div>
        )
    }
}




{/* function tplawesome(e,t){res=e;for(var n=0;n<t.length;n++){res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){return t[n][r]})}return res}

$(function() {
    $("form").on("submit", function(e) {
       e.preventDefault();
       // preaparo da lista
       var request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
            maxResults: 3,
            order: "viewCount",
            publishedAfter: "2015-01-01T00:00:00Z"
       }); 
       // execução do request
       request.execute(function(response) {
          var results = response.result;
          $("#results").html("");
          $.each(results.items, function(index, item) {
            $.get("tpl/item.html", function(data) {
                $("#results").append(tplawesome(data, [{"title":item.snippet.title, "videoid":item.id.videoId}]));
            });
          });
          resetVideoHeight();
       });
    });
    
    $(window).on("resize", resetVideoHeight);
});

function resetVideoHeight() {
    $(".video").css("height", $("#results").width() * 9/16);
}

function init() {
    gapi.client.setApiKey("");
    gapi.client.load("youtube", "v3", function() {
        // FUNCIONA!!!!
    });
} */}
