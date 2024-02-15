const filterByIds = (submissions, ids) => {
    const idsArray = ids.split(',');
    return submissions.filter(submission => idsArray.includes(submission.id));
};

const filterByQuery = (submissions, q) => {
    return submissions.filter(submission =>
        Object.values(submission).some(value =>
            value.toString().toLowerCase().includes(q.toLowerCase())
        )
    );
};

const filterByTitle = (submissions, title) => {
    return submissions.filter(submission =>
        submission.title.toLowerCase().includes(title.toLowerCase())
    );
};

const filterByAuthor = (submissions, author) => {
    return submissions.filter(submission => submission.author === author);
};

const sortSubmissions = (submissions, sort, sort_type) => {
    if (!['asc', 'desc'].includes(sort)) {
        throw new Error(`Invalid sort direction: ${sort}. Must be 'asc' or 'desc'.`);
    }

    return submissions.sort((a, b) => {
        let compareValue = Number(a[sort_type]) - Number(b[sort_type]);
        return sort === 'asc' ? compareValue : -compareValue;
    });
};

module.exports = { filterByIds, filterByQuery, filterByTitle, filterByAuthor, sortSubmissions };
