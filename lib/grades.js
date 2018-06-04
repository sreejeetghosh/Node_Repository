var gradeBook = {

    _grades: [],
    addGrade: function(newGrade){
        this._grades.push(newGrade);
    },
    getCountOfGrades: function(){
        return this._grades.length;
    },
    getAverage: function(){
        var total = 0;
        for(var i = 0; i<this._grades.length; i+=1)
        {
            total += this._grades[i];
        }
        return total/this._grades.length;
    },
    reset: function(){
        this._grades = [];
    },
    getLetterGrade: function(){
        var average = this.getAverage();
        if(average < 60)
        {
            return 'F';
        }
        else if (average < 70)
        {
            return 'D';
        }
        else if (average < 80)
        {
            return 'C';
        }
        else if (average < 90)
        {
            return 'B';
        }
        else
        {
            return 'A';
        }
    }
};

exports.book = gradeBook;