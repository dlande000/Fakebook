export const fetchSearchResults = input => (
    $.ajax({
        url: `api/search/${input}`
    })
);