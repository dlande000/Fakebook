export const fetchSearchResults = input => (
    $.ajax({
        url: `api/searches/${input}`
    })
);