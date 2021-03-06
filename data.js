var QA = [
{"Q":"How do you find P(A union B)? ","A":" P(A) + P(B) - P(A intersect B)"},
{"Q":"What does it mean if A and B are mutually exclusive? ","A":" A intersect B contains no sample points"},
{"Q":"What is the probability that when two coins are flipped the result is heads-heads? ","A":" The answer is 1/4."},
{"Q":"If you roll a pair of dice, what is the probability that you roll a 10 or higher? ","A":" 1 in 6"},
{"Q":"What is an EVENT? ","A":" A specific collection of sample points."},
{"Q":"Define 0! ","A":"1"},
{"Q":"What is the sample space of a 10 sided dice. ","A":" There are 10 possible numbers, therefore a sample space of n = 10."},
{"Q":"How can you find the probability of an event? ","A":" total # of sample points in event / total # of sample points OR sum of all the probabilities of the sample points in event"},
{"Q":"What range must sample point probabilities lie between ","A":" 0-1 (inclusive)"},
{"Q":"When would you use combinations? ","A":" When the order doesn't mattter."},
{"Q":"What is the probability of rolling a 2 when rolling a 6 sided dice? ","A":" 1/6"},
{"Q":"If a z score is less than the mean value, will the z score be positive or negative. ","A":" negative"},
{"Q":"What does the middle line of the box and whisker plot represent? ","A":" It represents the median."},
{"Q":"How do you calculate z-value? ","A":" z= (x - x_bar )/ s"},
{"Q":"What is the symbol for sample mean and what is the symbol for population mean? ","A":" sample mean: x with bar over it population mean: mu"},
{"Q":"What is the interquartile range formula? ","A":" IQR=QU-QL or IQR = Q3-Q1"},
{"Q":"According to the empirical rule, what percent of the data should fall within 2 standard deviations of the mean? ","A":"0.95"},
{"Q":"what are s and s^2? ","A":" standard deviation vs variation"},
{"Q":"What are the distances from the hinges that make up the dimensions of a Box Plot? ","A":" The inner fence is at a distance of 1.5 IQR and the outer fence is at a distance of 3 IQR."},
{"Q":"What does the z score indicate? ","A":" The number of standard deviations away from the mean of a measurement x."},
{"Q":"What do the outer fences on a box plot represent? ","A":" It is the distance of 3IQR from the hinges."},
{"Q":"Is a Pareto chart organized in ascending or descending order? ","A":" Descending."},
{"Q":"What kind of data is a dot plot used for? ","A":" Quantitative data"},
{"Q":"If a sample is left skewed is the median larger or smaller than the mean? ","A":" larger"},
{"Q":"What method can be used to find a middle number of a data set if an outlier skews the mean. ","A":" Take the median"},
{"Q":"What EXCEL formulas are used to find the highest, lowest, and middle values from a set of numerical data? ","A":" '=MAX(), =MIN(), =MEDIAN()"},
{"Q":"What is the formula for class relative frequency? ","A":" class frequency/n"},
{"Q":"If a probability distribution is skewed to the right, what does it say about the mean and median? ","A":" median < mean"},
{"Q":"How do you find the median of an even numbered data set? ","A":" You place the numbers in ascending/descending order then find the mean of the two middle most numbers."},
{"Q":"What are three types of graphs you can use to display qualitative data? ","A":" Pie chart, bar graph, pareto diagram"},
{"Q":"What does standard deviation represent? ","A":" Standard deviation is the root of variance. It measures dispersion/spread of the data by showing the usual distance from the mean amongst observations in a data set."},
{"Q":"What do x?? and ?? mean? ","A":" x?? = Sample Mean, ?? = Population Mean"},
{"Q":"What is the median of the numbers below: 1,2,2,3,3,4,5,5,6 ","A":"3"},
{"Q":"What are the different types of ways to illustrate quantitative data? ","A":" Dot plots, Stem & Leaf, Histograms"},
{"Q":"What is a counting rule to use when order matters?","A":"Permutation rule"},
{"Q":"If you roll a pair of die one at a time and your first roll is a 1, knowing thatr, what is the probability that the total of your combined 2-dice roll will be 2?","A":"1/6"},
{"Q":"What is the formula for the Permutations Rule of counting?","A":"N! / (N-n)!"},
{"Q":"If ranking doesn't matter, would you use the permutation rule or the combinations rule?","A":"combinations "},
{"Q":"Contrast the union and intersection of two events A & B","A":"The union accounts for sample points that exists in all of A & B; the intersection deals with only sample points A & B have in common."},
{"Q":"What is the probability of rolling a 3 on a 6 sided die AND flipping a heads on a  coin?","A":"1/6+1/2= 2/3"},
{"Q":"When calculating conditional probability of Event A given Event B, what probability is in the denominator of the calculation and what does it mean in the context of the problem?","A":"The probability of whatever is given will go in the denominator, meaning that you will confine the sample space to the sample points in the \"given\" event"},
{"Q":"Is P(A) independent or dependent of P(B)?  P(A):{rolling an even number on a dice}  P(B): {getting heads when flipping a coin}","A":"Independent "},
{"Q":"Event A represents a situation in which you flip two coins and at least one of them lands on \"heads\". What is the probability of the complement to event A?","A":"The answer is (1/4) or 25%."},
{"Q":"True or False: Mutually exclusive events have sample points in common","A":"False."},
{"Q":"A probability is a number that lies within what range of values?","A":"a value between 0-1"},
{"Q":"What is the additive rule?","A":"P(A U B)= P(A) + P(B) - P(A ??? B)"},
{"Q":"The use of \"or\" in a probability question means you should think about what kind of compound event?","A":"a union"},
{"Q":"How do you find the compliment of P(A)?","A":"Subtract P(A) from 1."},
{"Q":"What does union of event A and event B mean?","A":"A OR B"},
{"Q":"What is the symbol for a union for two events?","A":"U"},
{"Q":"What does the square root of npq represent in binomial probability?","A":"The standard deviation"},
{"Q":"How do you find q","A":"1-p"},
{"Q":"What are possible outcomes for one trial with a binomial distribution?","A":"Success/Failure"},
{"Q":"What do n, p, and q stand for in the binomial distribution?","A":"n = # of trials  p = probability of success for one trial  q = probability of failures for one trial"},
{"Q":"Describe a binomial random variable.","A":"A discrete random number corresponding to the # of successful trials out of n total trials"},
{"Q":"In a binomial distribution what is the probability of a trial failure (relative to the probability of success)?","A":"q= 1-p"},
{"Q":"Within the binomial probability distribution equation, what does 'p' stand for? ","A":"Probabilty of a success on a single trial. "},
{"Q":"When can a random variable be a Poisson Random Variable?","A":"For random variables that describe the number of rare events in a time, volume, area"},
{"Q":"What is a key difference between Binomial and Poisson?","A":"The binomial random variable can only go up to n; a Poisson random variable has no upper bound"},
{"Q":"If the mean of a poisson distribution is 9 and after an experiment is conducted the random variable x=7, what is the standard deviation of the distribution?","A":"std dev=3"},
{"Q":"What greek symbol represents the mean in a Poisson Distribution? ","A":"Lambda"},
{"Q":"Is a Poisson random variable discrete or continuous?","A":"Discrete"},
{"Q":"True or False Poisson Random Variables describes the # of successes out of n trials","A":"False"},
{"Q":"In the Possion distribution lambda is equal to what two distribution parameters?","A":"mean and variance"},
{"Q":"what does the poisson random variable measure?","A":"the number of events/things occuring in a given area, time, or volume"},
{"Q":"True or False? In a Poisson Distribution, the mean and the variance are equal to eachother?","A":"TRUE"},
{"Q":"In a Poisson random process, the probability that an event occurs in a given unit of time, area or volume is _______ for all units.","A":"the same"},
{"Q":"What is a key difference between hypergeometric and binomial distributions?","A":"Hypergeometric is dependent and binomial is independent"},
{"Q":"True or False: the mean of a binomial distribution is (nr)/N","A":"False "},
{"Q":"What is hypergeometric distribution?","A":"# Successes drawn or pulled out of N trials, using sample size n containing r successes"},
{"Q":"What distribution best describes counting the number of successes out of N elements using a sample size n with r possible successes?","A":"Hypergeometric"},
{"Q":"True or False: Each uniform random variable is equally likely to occur","A":"True"},
{"Q":"Is uniform random distribution continuous or discrete?","A":"Continuous"},
{"Q":"What shape is the uniform probability distribution?  ","A":"Rectangular. Height = 1/(d-c) and width = (d-c); d = upper bound; c = lower bound"},
{"Q":"Continuous radom variables are MEASUREABLE, whereas discrete random variables are ____________","A":"COUNTABLE"},
{"Q":"what is the *effective* probability of randomly selecting any specific real number through sampliong from a continuous probability distribution","A":"0"},
{"Q":"How is the mean calculated for a Uniform probability distribution?","A":"d+c/2 (average of the lower and upper bounds)"},
{"Q":"What is the notation for the upper bound of the uniform distribution in our text?","A":"d"},
{"Q":"What is the formula for f(x) in a uniform probability distribution?","A":"1/(d-c)"},
{"Q":"What table is used in the book to find the probabilities associated with a Standard Normal variables?","A":"Table II  "},
{"Q":"For a normal distribution, the mean indicates where the _____ is   located, and the standard deviation indicates   ____ of the data.  ","A":"center, spread "},
{"Q":"How would you standardize a normal varaible (X) into a standard normal variable (Z)?","A":"Using the equation: Z =  (x-mean)/(standard deviation) "},
{"Q":"What is the mean value for a standard normal distribution?","A":"0"},
{"Q":"The exponential probability distribution is also sometimes known as what?","A":"The Waiting Time Distribution"},
{"Q":"What does the exponential distribution often model?","A":"The time or distance between events. "},
{"Q":"What is A equal to? (A is the area under the exponential curve where the variable x is greater than a)","A":"A=e^(-a/theta)"},
{"Q":"What is the relationship between the exponential and Poisson distributions? ","A":"An exponential distribution will intersect the y axis at lambda. theta=1/lambda"},
{"Q":"What is the mean and standard deviation for exponential distribution?","A":"Theta for both!"},
{"Q":"How many methods are listed in the text to assess if a variable follows an approximate normal distrubution?","A":"4"},
{"Q":"How can you use the IQR and standard deviation to determine if a data set follows an approximately normal distribution?","A":"IQR/standard deviation= 1.3 (approximately)"},
{"Q":"How to determine whether the data is from an approximately normal distribution?","A":"histogram/stem and leaf, stdev intervals (e.g. 95% w/in 2 stdevs), IQR/s =1.3, normal probability plot w/ approx. straight line"},
{"Q":"How do you convert z-score to x and vice versa?","A":"z = (x - mean)/(standard deviation)"},
{"Q":"What are the conditions for a small sample test?","A":"1. random sample selected from a target pop  2. distribution sample is approx. normal"},
{"Q":"True or False: alpha represents the risk of having a type II error","A":"False"},
{"Q":"What is a Type I error?","A":"An outlier/unlikely sample causes you to reject the null hypothesis when it is in fact true "},
{"Q":"What is half the width of the confidence interval?","A":"Sampling error"},
{"Q":"How can you conservatively estimate standard deviation when calculating sample size?","A":"range(R)/4"},
{"Q":"How can the t-table be used to find common critical values on the z distribution?","A":"t-table has a row for infinite degrees of freedom in the last row which shows ciritcal z-values."},
{"Q":"True or false: If you do not know sigma, you can estimate it by dividing the random variable's range by 6","A":"False. It should be R/4"},
{"Q":"What is the difference between population mean and sample mean?","A":"Population mean is usually unknown and is the mean of an entire population. The sample mean is the mean of one sample taken from the population. "},
{"Q":"What characteristic mainly distinguishes a t-distribution from a z-distribution?","A":"a t-distribution's spread is a variable (determined by its degrees of freedom), whereas a z distribution is fixed"},
{"Q":"How do you calculate the variable (Alpha) in a confidence interval problem?","A":"1 - Confidence Coefficient (C.C.)"},
{"Q":"what is a point estimator","A":"it is a rule or formula that tells us how to use sample data to calculate a single number used as an estimate of population parameter"},
{"Q":"If the confidence interval is 90%, then what is the alpha/2 value?","A":"0.05"},
{"Q":"When do we use a small sample confidence interval?","A":"When n < 30"},
{"Q":"True or false: x bar is an unbiased estimator ","A":"true "},
{"Q":"What does MVUE stand for?","A":"minimum variance unbiased estimator"}
];
