$('.thumbnail').on('click', e => {
  let img = e.target;

  // if thumbnail has focus, change target to child img
  if (!$(img).attr('src')) img = $(e.target).find('img');

  let heroImg = $('.hero img');
  heroImg.attr({
    src: $(img).attr('src'),
    alt: $(img).attr('alt')
  });
});


