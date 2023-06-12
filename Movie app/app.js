$(document).ready(function() {
    $('#rating-form').submit(function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      let title = $('#title-input').val();
      let rating = $('#rating-input').val();
  
      let newItem = $('<div class="rating-item"></div>');
      newItem.append('<span class="title">' + title + '</span>');
      newItem.append('<span class="rating">' + rating + '</span>');
  
      let removeButton = $('<button class="remove-button">Remove</button>');
  
      removeButton.click(function() {
        $(this).parent().remove(); // Remove the parent div
      });
  
      newItem.append(removeButton);
  
      // Sort the movies based on ratings
      let movies = $('.rating-item');
      movies.sort(function(a, b) {
        let ratingA = parseInt($(a).find('.rating').text());
        let ratingB = parseInt($(b).find('.rating').text());
        return ratingB - ratingA;
      });
  
      $('#ratings-list').empty(); // Clear the existing list
  
      // Append the sorted movies to the ratings-list container
      movies.each(function() {
        $('#ratings-list').append($(this));
      });
  
      $('#ratings-list').append(newItem);
  
      $('#title-input').val('');
      $('#rating-input').val('');
    });
  });
  