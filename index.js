// my initial attempt

// function Stopwatch() {
//     this.duration = this.stop - this.start;
//     this.start = function() {
//         let start = Date.now();
//     },
//     this.stop = function() {
//         let stop = Date.now();
//     },
//     this.reset = function() {
//         this.duration = 0;
//     }
// }


// mosh solution from video

function Stopwatch() {                  //got this part right!
    // initialize all variables, but only value needed is that of duration
    let startTime, endTime, running, duration = 0;

    this.start = function() {
        // sw is either running or not running
        if (running)
            throw new Error('Stopwatch has already started.'); 
            // providing value for running
        running = true;
        //does not need to return anything; is only providing value for / creates startTime
        startTime = new Date();
    };

    this.stop = function() {
        // sw is either running or not running
        if (!running)
            throw new Error('Stopwatch is not started.');
            // providing value for running
        running = false;
            // provides value for endTime
        endTime = new Date();
            
            /* Subtracting two subsequent getTime() calls on newly generated Date objects
             give the time span between these two calls. */
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
            // updates value for duration
        duration += seconds;

    };

    this.reset = function() {
        // resets all values
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };
    // no idea what this is
    Object.defineProperty(this, 'duration', {
        get: function() {return duration; }
    })
}
