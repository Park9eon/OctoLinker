export const showNotification = ({ body }) => {
  const el = document.createElement('div');
  el.innerHTML = `<div class="flash flash-full">
    <div class="container">
      <button class="flash-close js-flash-close" type="button" aria-label="Dismiss this message">
        <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
      </button>
      ${body}
    </div>
  </div>`;

  document.getElementById('js-flash-container').append(el);
};

export const showTooltip = ($target, msg) => {
  if (!$target.hasClass('tooltipped')) {
    $target.addClass('tooltipped tooltipped-e tooltipped-no-delay');
  }

  $target.attr('aria-label', msg);
};

export const removeTooltip = $target => {
  if ($target.hasClass('tooltipped')) {
    $target.removeClass('tooltipped tooltipped-e');
  }

  $target.removeAttr('aria-label');
};
