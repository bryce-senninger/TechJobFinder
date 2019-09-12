let description = "";
let searchLocation = "";

function resetFields() {
    $("#locationInput").val("Search by Location");
    $("#descriptionInput").val("Search by Description");
};

$( document ).ready(function() {
    resetFields();
});

function runLocationSearch() {
    $("#search-button1").click(function() {
        $("#searchResults").empty();
        let searchLocation = $("#locationInput").val().trim();
        let innerHTML = '';

        let queryURL = "https://cors-anywhere.herokuapp.com/" + "https://jobs.github.com/positions.json?description=" + description + "&location=" + searchLocation;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            let results = response;
            for(var i = 0; i < results.length; i++){
                innerHTML += '<tr>';
                innerHTML += '<td>' + results[i].title + '</td>';
                innerHTML += '<td>' + results[i].company + '</td>';
                innerHTML += '<td>' + results[i].location + '</td>';
                innerHTML += `<td><button data-jobId=${results[i].id} class="infoButton">More Info</button></td>`;
                innerHTML += '</tr>';
            }
            $("#searchResults").append(innerHTML);
            detailView();
            resetFields();
            });
    });
}

function runDescriptionSearch() {
    $("#search-button2").click(function() {
        $("#searchResults").empty();
        let description = $("#descriptionInput").val().trim();
        let innerHTML = '';

        let queryURL = "https://cors-anywhere.herokuapp.com/" + "https://jobs.github.com/positions.json?description=" + description + "&location=" + searchLocation;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            let results = response;
            if (results.length > 0) {
                for(var i = 0; i < results.length; i++){
                    innerHTML += '<tr>';
                    innerHTML += '<td>' + results[i].title + '</td>';
                    innerHTML += '<td>' + results[i].company + '</td>';
                    innerHTML += '<td>' + results[i].location + '</td>';
                    innerHTML += `<td><button data-jobId=${results[i].id} class="infoButton">More Info</button></td>`;
                    innerHTML += '</tr>';
                }
                $("#searchResults").append(innerHTML);
            } else {
                $("#myModal").modal('show');
            }
            
            detailView();
            resetFields();
        });
    });
}

function detailView() {
    $(".infoButton").click(function() {
        const jobId = $(this).attr('data-jobId')
        window.location.href="more-info.html?job_id=" + jobId;
    });
}

runLocationSearch();
runDescriptionSearch();
