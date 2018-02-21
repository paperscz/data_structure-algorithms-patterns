/**
 * The Boyer-Moore Majority Vote Algorithm
 * 
    The majority vote problem is to determine in any given sequence of votes whether there is a candidate with more votes than all the others, and if so, 
    to determine this candidate. The Boyer-Moore majority vote algorithm solves the problem in time linear in the length of the sequence and constant 
    memory.

    It does so in two repetitions. The first repetition eliminates all candidates but one. The second repetition verifies whether or not the remaining 
    candidate holds a majority. Given the postcondition of the first repetition, it is easy to implement the second repetition, and to verify its 
    correctness.

    The first repetition is more interesting. In this note we therefore try to develop the first repetition from its postcondition. We model the 
    sequence of votes by an array a, and the candidate to be chosen by a variable p, according to the following declaration.
 */

 /*
    The problem:
    Given an array of size n, find the majority element. The majority element is the element that appears more than floor(n/2) times.

     You may assume that the array is non-empty and the majority element always exist in the array.

     Example :

        Input : [2, 1, 2]
        Return  : 2 which occurs 2 times which is greater than 3/2. 

Solution.
    1. The first step gives the element that may be majority element in the array. If there is a majority element in an array, then this step will definitely 
    return majority element, otherwise it will return any other element.
    2. Check if the element obtained from above step is majority element.This step is necessary as we are not always sure that element return by first step 
    is majority element().

    1. Finding a Candidate:(majorityIndex = 0, count = 1)
    The algorithm for first phase that works in O(n) is known as Moore’s Voting Algorithm. Basic idea of the algorithm is if we cancel out each occurrence 
    of an element e with all the other elements that are different from e then e will exist till end if it is a majority element.

Time Complexity: O(n)
Auxiliary Space : O(1)


*/
function majorityElement(num){
    if(num.length === 1) return num[0];

    var majorityIndex = 0;

    for (var count = 1, i = 1; i < num.length; i++) {
        num[majorityIndex] == num[i] ? count++ : count--;

        if (count == 0) {
            majorityIndex = i;
            count = 1;
        }
    }

    return num[majorityIndex];
}

var A = [ 345550, 795673, 817297, 463389, 310822, 805076, 920925, 817297, 817297, 182709, 436820, 817297, 817297, 817297, 817297, 817297, 817297, 263236, 772190, 585741, 354367, 514928, 903332, 817297, 817297, 222927, 608, 817297, 672384, 817297, 681041, 256380, 805870, 266065, 676851, 817297, 438526, 817297, 880946, 817297, 817297, 817297, 247558, 817297, 817297, 357701, 839408, 817297, 925734, 817297, 817297, 798594, 817297, 817297, 735998, 817297, 817297, 817297, 817297, 322939, 817297, 817297, 817297, 812814, 734999, 817297, 134242, 817297, 118807, 817297, 557107, 156963, 817297, 293811, 817297, 817297, 405032, 89956, 817297, 4995, 48808, 53643, 817297, 345494, 817297, 817297, 817297, 817297, 996030, 73655, 917692, 515770, 917138, 817297, 817297, 817297, 817297, 817297, 238606, 817297, 817297, 876877, 817297, 817297, 817297, 817297, 817297, 817297, 817297, 817297, 759087, 817297, 376711, 817297, 761397, 817297, 288919, 53522, 817297, 412310, 817297, 323156, 530068, 968505, 703653, 238695, 817297, 817297, 145534, 142969, 817297, 568236, 817297, 817297, 547877, 817297, 817297, 817297, 159595, 817297, 547748, 587178, 951289, 829077, 183946, 5238, 525340, 817297, 817297, 817297, 941193, 296599, 817297, 817297, 18742, 259107, 752688, 817297, 817297, 136640, 249438, 817297, 817297, 817297, 817297, 729092, 817297, 526140, 709339, 817297, 346760, 868516, 817297, 488457, 817297, 422269, 690955, 817297, 494990, 817297, 817297, 878670, 152130, 817297, 817297, 817297, 432349, 817297, 817297, 451043, 817297, 606514, 817297, 817297, 425553, 817297, 273500, 104433, 297289, 801636, 817297, 674138, 895444, 817297, 237525, 817297, 274485, 980252, 569478, 537620, 817297, 637787, 994649, 980607, 586599, 817297, 552136, 817297, 987194, 15735, 817297, 817297, 817297, 101278, 817297, 817297, 673307, 231170, 817297, 817297, 817297, 403281, 817297, 576661, 817297, 583692, 817297, 318073, 817297, 817297, 817297, 967815, 401713, 817297, 911162, 817297, 796759, 828982, 817297, 763281, 731769, 100773, 817297, 817297, 371010, 926255, 158962, 817297, 904208, 817297, 235542, 841642, 473435, 817297, 460901, 817297, 782334, 817297, 569957, 728893, 817297, 459182, 817297, 515670, 817297, 381180, 111842, 817297, 641692, 817297, 349796, 817297, 926385, 950051, 932495, 817297, 817297, 760357, 4779, 817297, 817297, 730053, 957368, 736526, 429749, 817297, 817297, 817297, 720715, 817297, 587860, 672037, 470805, 817297, 817297, 817297, 817297, 534528, 107022, 817297, 267143, 817297, 334588, 783229, 817297, 817297, 817297, 711634, 817297, 163881, 15195, 817297, 817297, 929583, 817297, 817297, 817297, 817297, 817297, 817297, 397051, 177103, 817297, 673949, 812868, 107051, 817297, 308762, 817297, 360133, 817297, 457671, 817297, 383996, 817297, 817297, 25696, 105289, 628188, 817297, 817297, 642160, 565455, 817297, 817297, 817297, 767666, 895213, 817297, 817297, 199610, 817297, 817297, 817297, 817297, 149061, 817297, 817297, 870323, 817297, 503489, 155123, 817297, 392196, 539414, 41286, 667807, 232952, 817297, 817297, 30067, 817297, 817297, 50598, 817297, 423805, 817297, 10547, 817297, 202599, 817297, 512840, 930869, 307292, 972247, 817297, 775489, 817297, 817297, 982806, 817297, 590869, 817297, 965214, 817297, 817297, 48707, 911713, 795879, 817297, 817297, 677, 362034, 817297, 785684, 817297, 817297, 109138, 952068, 476727, 817297, 893621, 489639, 817297, 817297, 289458, 538836, 817297, 817297, 653690, 817297, 817297, 817297, 89647, 817297, 241895, 881263, 432297, 817297, 3041, 18206, 817297, 672452, 817297, 817297, 65674, 817297, 817297, 817297, 817297, 233272, 817297, 276552, 619920, 300237, 355936, 817297, 811202, 817297, 817297, 817297, 817297, 192104, 328611, 405959, 518208, 817297, 835763, 610375, 650213, 817297, 627803, 640230, 817297, 12278, 817297, 817297, 121393, 650577, 912274, 225163, 309592, 817297, 817297, 817297, 817297, 817297, 817297, 839132, 482902, 817297, 817297, 817297, 817297, 817297, 817297, 817297, 592996, 817297, 946395, 817297, 817297, 817297, 169558, 382129, 817297, 817297, 968842, 745267, 972617, 446065, 817297, 817297, 817297, 817297, 375463, 817297, 817297, 30169, 844394, 817297, 817297, 827693, 449706, 817297, 817297, 650409, 817297, 817297, 667151, 904686, 817297, 11423, 817297, 342440, 986566, 436543, 817297, 488935, 817297, 61678, 817297, 817297, 159602, 520848, 855240, 817297, 817297, 817297, 438962, 697510, 817297, 375901, 744587, 817297, 817297, 817297, 54845, 817297, 564326, 817297, 9167, 817297, 817297, 550286, 232088, 228587, 817297, 817297, 921560, 446717, 817297, 729103, 376199, 754927, 668547, 804719, 817297, 401162, 817297, 817297, 817297, 930674, 92362, 817297, 817297, 817297, 280659, 817297, 817297, 349286, 966203, 817297, 817297, 238205, 998091, 201978, 817297, 817297, 817297, 817297, 517970, 514931, 817297, 817297, 876733, 59568, 440215, 817297, 817297, 817297, 817297, 201030, 823160, 274353, 817297, 817297, 817297, 817297, 120553, 817297, 817297, 511328, 194736, 752258, 713055, 817297, 817297, 817297, 655162, 268091, 817297, 817297, 12944, 798699, 817297, 508366, 817297, 89165, 817297, 835033, 817297, 817297, 817297, 506974, 407170, 338801, 668560, 372551, 607670, 817297, 795222, 867292, 698203, 576590, 817297, 121896, 817297, 928111, 909304, 500640, 817297, 817297, 817297, 817297, 817297, 817297, 637466, 817297, 817297, 817297, 325458, 817297, 817297, 55494, 216918, 74222, 367297, 871278, 878792, 817297, 396708, 817297, 817297, 742484, 957163, 817297, 298271, 682831, 817297, 817297, 817297, 409713, 817297, 817297, 817297, 817297, 817297, 553618, 817297, 817297, 817297, 224463, 852006, 971420, 797015, 776982, 790867, 427681, 311461, 752934, 817297, 817297, 817297, 817380, 817297, 817297, 817297, 957370, 817297, 737503, 817297, 817297, 817297, 817297, 817297, 195089, 817297, 349020, 363491, 877768, 949619, 872723, 895070, 817297, 819230, 817297, 508772, 817297, 817297, 988919, 827564, 692408, 817297, 817297, 680604, 159844, 805408, 219151, 817297, 817297, 817297, 817297, 635061, 281133, 817297, 817297, 817297, 817297, 510461, 817297, 631070, 817297, 817297, 817297, 174599, 817297, 817297, 746114, 817297, 803001, 817297, 280654, 817297, 894881, 529085, 328922, 738280, 904065, 817297, 501174, 817297, 817297, 817297, 817297, 817297, 607501, 817297, 941139, 817297, 317590, 817297, 817297, 817297, 817297, 817297, 531995, 817297, 375321, 817297, 817297, 709186, 817297, 123471, 63145, 817297, 611178, 689348, 278361, 817297, 19587, 817297, 817297, 817297, 675166, 817297, 817297, 341930, 817297, 520628, 588666, 468153, 818369, 172489, 817297, 817297, 817297, 912510, 817297, 817297, 75540, 537448, 664192, 817297, 817297, 485682, 817297, 817297, 817297, 817297, 817297, 473448, 817297, 872999, 817297, 985949, 817297, 817297, 124204, 817297, 817297, 817297, 678994, 817297, 817297, 635987, 817297, 277891, 817297, 564490, 695721, 107852, 88145, 817297, 46639, 716194, 817297, 817297, 134441, 780574, 817297, 658870, 541265, 817297, 817297, 862303, 817297, 817297, 400393, 817297, 803632, 750347, 710469, 817297, 949874, 817297, 276123, 46874, 719099, 817297, 817297, 457112, 480730, 817297, 552795, 258486, 817297, 862125, 301792, 414098, 817297, 817297, 817297, 817297, 817297, 817297, 129119, 570988, 817297, 180510, 817297, 41281, 817297, 189412, 845855, 814219, 817297, 817297, 732951, 260013, 563923, 817297, 859399, 441392, 817297, 817297, 817297, 817297, 510446, 817297, 925035, 817297, 219460, 817297, 817297, 883074, 817297, 817297, 817297, 840903, 198162, 296172, 817297, 161981, 817297, 635734, 834334, 817297, 817297, 817297, 153672, 817297, 992243, 218689, 270024, 723313, 817297, 517357, 817297, 876842, 817297, 817297, 817297, 227251, 984944, 64521, 817297, 817297, 817297, 817297, 740508, 817297, 884083, 202328, 341565, 787434, 817297, 955001, 817297, 817297, 13632, 592638, 817297, 35188, 668959, 554733, 817297, 817297, 341798, 817297, 817297, 817297, 174566, 416959, 817297 ];


findMajority(A); // Majority found :- 817297