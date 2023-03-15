const { User, Comment, Quote } = require('./db/models');

const pretty = (obj) => JSON.parse(JSON.stringify(obj));

(async () => {
  //   const alexComments = await User.findOne({
  //     where: { name: 'Alex' },
  //     include: Comment,
  //   });

  //   console.log(pretty(alexComments.Comments.map((comment) => comment.message)));

  //   const bobQuotesWithComments = await User.findOne({
  //     where: { name: 'Bob' },
  //     include: {
  //       model: Comment,
  //       include: Quote,
  //     },
  //   });

  //   const quotesOnly = bobQuotesWithComments.Comments.map((comment) => comment.Quote.body);

  //   console.log({ ...pretty(bobQuotesWithComments), Quotes: quotesOnly });

  const firstQuote = await Quote.findOne({
    where: { id: 1 },
    include: 'commentsFrom',
  });

  console.log(pretty(firstQuote));
})();
