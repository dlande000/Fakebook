export const fetchSearchResults = input => {
    return $.ajax({
        url: `api/search/${input}`
    });
};