// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
const directors = movies.map(function(movie){
        return movie.director;
        })
        console.log(directors)
return directors;
}

getAllDirectors(movies);


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    const dramaMovies= movies.filter(function(movie){
        return movie.genre.indexOf('Drama') !== -1 && movie.director == 'Steven Spielberg' 
      });
return dramaMovies.length
}

howManyMovies(movies);


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if (movies.length === 0) return 0
    else {
        //get the array of rates
        const ratesArray = movies.map(function(movie){
            return movie.rate;
        });
    
        //filter the array of rates if rate is empty - but this solution does not really match the last test expectations ;) 
        const ratesFilterArray = ratesArray.filter(function(rate){
            return rate !== ''
        });

        //reduce the array
        const rateAvg= ratesFilterArray.reduce(function(acc,val){
            return acc + val 
        },0);
    return Math.round(rateAvg/ratesFilterArray.length*100)/100
    } 
}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies)  {
    const dramaMovies= movies.filter(function(movie){
        return movie.genre.indexOf('Drama') !== -1 
    });

    if (dramaMovies.length === 0) return 0
    else {
        //get the array of rates for drama movies
        const ratesArray = dramaMovies.map(function(movie){
            return movie.rate;
        });

        //reduce the array
        const rateAvg= ratesArray.reduce(function(acc,val){
            return acc + val 
        },0);
    return Math.round(rateAvg/ratesArray.length*100)/100
    }   
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    const initialArray = [...movies];
    const sortedArray = initialArray.sort(function(a,b) {
       if (a.year>b.year) return 1;
       else if (a.year<b.year) return -1;
       else if(a.year===b.year) {
           if (a.title>b.title) return 1
           else return -1  
       }
    });
    return sortedArray
}   

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    const initialArray = [...movies];
    const sortedArray = initialArray.sort(function(a,b) {
       if (a.title>b.title) return 1;
       else if (a.title<b.title) return -1;
    });
    const titles = sortedArray.map(function(movie){
        return movie.title;
    });
    if (titles.length>20) return titles.slice(0,20)
    return titles
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// I dont understand why I fail on return a new array since I return a new array haha :):)
// same remark with number - I dont get why it is not a number since I parseInt the two elements ... :)

function turnHoursToMinutes(movies) {
    const newArray = [...movies];
    for (movie of newArray) {
      let length=movie.duration.length
        movie.duration = parseInt(movie.duration.substring(0,1)*60)+parseInt(movie.duration.substring(length-5,length-3))
    }
  return newArray
}


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(movies) {
    const yearsAndRate = movies.map(function(movie){
        return {
        year: movie.year,
        rate: movie.rate
        };
        });
        
    const array= yearsAndRate[0];

    for (movie of yearsAndRate) {
      if (array.year.indexOf(movie.year) == -1) {
          array.push(movie)
      }
      else {
        ind=array.year.indexOf(movie.year)
        array[ind].rate=(array[ind].rate+movie.rate)/2
      }
    }
    return array;
}

