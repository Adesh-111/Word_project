
const logicalQuestions = [
    // Alphanumeric series
    { word: "g14", hint: "h8, j10, k12, l14, __?" },
    { word: "m17", hint: "p26, l17, j13, h10, __?" },
    { word: "w23", hint: "s19, o15, j11, e7, __?" },
    { word: "c9", hint: "b4, d5, f7, h9, __?" },
    { word: "r21", hint: "t24, p20, m17, k14, __?" },
    { word: "z26", hint: "w23, t20, q17, n14, __?" },
    { word: "b2", hint: "d4, f8, h16, __?" },
    { word: "k11", hint: "j9, i7, h5, g3, __?" },
    { word: "s19", hint: "p16, m13, k11, h8, __?" },
    { word: "x24", hint: "v21, r18, n15, j12, __?" },

    // Reasoning Analogies
    { word: "cat", hint: "kitten : cat :: puppy : __?" },
    { word: "pen", hint: "write : pen :: cut : __?" },
    { word: "circle", hint: "sphere : circle :: cube : __?" },
    { word: "leaf", hint: "tree : leaf :: flower : __?" },
    { word: "book", hint: "author : book :: artist : __?" },
    { word: "earth", hint: "moon : earth :: mars : __?" },
    { word: "swim", hint: "fish : swim :: bird : __?" },
    { word: "bark", hint: "dog : bark :: cat : __?" },
    { word: "run", hint: "walk : run :: crawl : __?" },
    { word: "cold", hint: "hot : cold :: fast : __?" },

    // Artificial Language
    { word: "giraffe", hint: "raffiga : __ :: elephant : htenele" },
    { word: "sun", hint: "nus : __ :: moon : noom" },
    { word: "water", hint: "retaw : __ :: tiger : regit" },
    { word: "happy", hint: "yppah : __ :: quiet : tciuq" },
    { word: "blue", hint: "eulb : __ :: green : neerg" },
    { word: "friend", hint: "dneirf : __ :: school : loohcs" },
    { word: "cloud", hint: "duolc : __ :: rain : niar" },
    { word: "star", hint: "rats : __ :: planet : telpna" },
    { word: "dance", hint: "ecnad : __ :: sing : gnis" },
    { word: "smart", hint: "trams : __ :: wise : esiw" },

    // Blood Relations
    { word: "brother", hint: "father's son is called __?" },
    { word: "aunt", hint: "mother's sister is called __?" },
    { word: "nephew", hint: "sister's son is called __?" },
    { word: "cousin", hint: "uncle's daughter is called __?" },
    { word: "grandmother", hint: "father's mother is called __?" },
    { word: "daughter", hint: "brother's female child is called __?" },
    { word: "uncle", hint: "mother's brother is called __?" },
    { word: "sibling", hint: "brother or sister is called __?" },
    { word: "father", hint: "son's parent is called __?" },
    { word: "niece", hint: "brother's daughter is called __?" },

    // Calendars
    { word: "friday", hint: "If today is Tuesday, what day will it be 200 days from now?" },
    { word: "april", hint: "If July 1, 2023, is a Sunday, what day is April 1, 2023?" },
    { word: "september", hint: "If it is the third Sunday of March, when is Easter?" },
    { word: "may", hint: "If June 1, 2022, is a Wednesday, what day is May 1, 2022?" },
    { word: "october", hint: "If November 1, 2024, is a Friday, what day is October 1, 2024?" },
    { word: "thursday", hint: "If it is the second Monday of the month, what day is it?" },
    { word: "august", hint: "If September 1, 2023, is a Friday, what day is August 1, 2023?" },
    { word: "saturday", hint: "If it is the fourth Thursday of the month, what day is it?" },
    { word: "june", hint: "If May 1, 2023, is a Monday, what day is June 1, 2023?" },
    { word: "december", hint: "If January 1, 2025, is a Wednesday, what day is December 1, 2024?" },

    // Cause and Effect
    { word: "wateringplants", hint: "Effect: Plants grow healthier :: Cause : __?" },
    { word: "exercising", hint: "Effect: Improved fitness :: Cause : __?" },
    { word: "studying", hint: "Effect: Higher grades :: Cause : __?" },
    { word: "eatinghealthy", hint: "Effect: Weight loss :: Cause : __?" },
    { word: "sleepingwell", hint: "Effect: Increased energy :: Cause : __?" },
    { word: "savingmoney", hint: "Effect: Financial security :: Cause : __?" },
    { word: "helpingothers", hint: "Effect: Feel happier :: Cause : __?" },
    { word: "communicating", hint: "Effect: Stronger relationships :: Cause : __?" },
    { word: "planningahead", hint: "Effect: Success :: Cause : __?" },
    { word: "positivethinking", hint: "Effect: Reduced stress :: Cause : __?" },

    // Clocks
    { word: "730", hint: "If the time now is 430, what will be the time in 3 hours?" },
    { word: "135degrees", hint: "What is the angle between the hour and minute hands of a clock at 345?"

 },
    { word: "midnight", hint: "If it is 6 hours before noon, what time is it?" },
    { word: "1215", hint: "If the time now is 915, what will be the time in 3 hours?" },
    { word: "45degrees", hint: "What is the angle between the hour and minute hands of a clock at 630?" },
    { word: "noon", hint: "If it is 6 hours after midnight, what time is it?" },
    { word: "600", hint: "If the time now is 900, what will be the time in 3 hours?" },
    { word: "60degrees", hint: "What is the angle between the hour and minute hands of a clock at 600?" },
    { word: "345", hint: "If the time now is 1245, what will be the time in 3 hours?" },
    { word: "halfpasttwo", hint: "If the time is 230, how do we say it?" },

    // Coding-Decoding
    { word: "friend", hint: "Code: HUMJOF :: FRIEND :: __?" },
    { word: "tiger", hint: "Code: VKIJS :: TIGER :: __?" },
    { word: "puzzle", hint: "Code: UZZLEP :: PUZZLE :: __?" },
    { word: "coding", hint: "Code: DICNOC :: CODING :: __?" },
    { word: "lamp", hint: "Code: MPLA :: LAMP :: __?" },
    { word: "flower", hint: "Code: WOLFER :: FLOWER :: __?" },
    { word: "logic", hint: "Code: IGCOL :: LOGIC :: __?" },
    { word: "music", hint: "Code: CUSIM :: MUSIC :: __?" },
    { word: "planet", hint: "Code: TENALP :: PLANET :: __?" },
    { word: "write", hint: "Code: ETIRW :: WRITE :: __?" },

    // Critical path
    { word: "criticalpath", hint: "What is the longest sequence of activities in a project?" },
    { word: "paralleltasks", hint: "What can reduce the total time required to complete a project?" },
    { word: "milestone", hint: "What is a significant event or point in a project timeline?" },
    { word: "resourceallocation", hint: "What involves assigning and managing resources in a project?" },
    { word: "taskdependencies", hint: "What defines the relationship between different tasks in a project?" },
    { word: "slacktime", hint: "What is the amount of time that a task can be delayed without affecting the project timeline?" },
    { word: "scopecreep", hint: "What refers to uncontrolled changes or continuous growth in a project's scope?" },
    { word: "projectmanager", hint: "Who is responsible for planning, executing, and closing a project?" },
    { word: "qualitycontrol", hint: "What involves ensuring that the project deliverables meet the specified quality standards?" },
    { word: "riskmanagement", hint: "What involves identifying, assessing, and mitigating potential risks in a project?" },

    // Cubes and cuboids
    { word: "216", hint: "The volume of a cube with side length 6 units is __ cubic units." },
    { word: "48", hint: "The surface area of a rectangular cuboid with dimensions 4x3x2 units is __ square units." },
    { word: "125", hint: "The volume of a cube with side length 5 units is __ cubic units." },
    { word: "54", hint: "The surface area of a cube with side length 3 units is __ square units." },
    { word: "64", hint: "The volume of a cube with side length 4 units is __ cubic units." },
    { word: "162", hint: "The surface area of a cube with side length 6 units is __ square units." },
    { word: "343", hint: "The volume of a cube with side length 7 units is __ cubic units." },
    { word: "100", hint: "The surface area of a cube with side length 5 units is __ square units." },
    { word: "27", hint: "The volume of a cube with side length 3 units is __ cubic units." },
    { word: "150", hint: "The surface area of a rectangular cuboid with dimensions 5x3x2 units is __ square units." },

    // Data Sufficiency
    { word: "insufficientdata", hint: "Statement 1: x > 5, Statement 2: x < 10. Are these statements sufficient to determine the value of x?" },
    { word: "sufficientdata", hint: "Statement 1: y + 3 = 8, Statement 2: y - 2 = 3. Are these statements sufficient to determine the value of y?" },
    { word: "insufficientdata", hint: "Statement 1: a < b, Statement 2: b < c. Are these statements sufficient to determine the relationship between a and c?" },
    { word: "sufficientdata", hint: "Statement 1: p + q = 10, Statement 2: p = 6. Are these statements sufficient to determine the value of q?" },
    { word: "insufficientdata", hint: "Statement 1: m > n, Statement 2: n > p. Are these statements sufficient to determine the relationship between m and p?" },
    { word: "sufficientdata", hint: "Statement 1: r = s, Statement 2: s < t. Are these statements sufficient to determine the relationship between r and t?" },
    { word: "insufficientdata", hint: "Statement 1: d > e, Statement 2: e > f. Are these statements sufficient to determine the relationship between d and f?" },
    { word: "sufficientdata", hint: "Statement 1: g = h, Statement 2: h = i. Are these statements sufficient to determine the value of i?" },
    { word: "insufficientdata", hint: "Statement 1: u < v, Statement 2: v < w. Are these statements sufficient to determine the relationship between u and w?" },
    { word: "sufficientdata", hint: "Statement 1: k - l = 3, Statement 2: l = 7. Are these statements sufficient to determine the value of k?" },

    // Decision Making
    { word: "optionb", hint: "You need to make a decision based on multiple options. One of the options is labeled 'B'." },
    { word: "choosethefirstoption", hint: "In a decision-making scenario, the first option is often the best. What should you do?" },
    { word: "evaluateprosandcons", hint: "When faced with a decision, it" },

        // Deductive Reasoning/Statement Analysis
        { word: "false", hint: "All roses are red. A tulip is red. Therefore, all tulips are roses. (True/False)" },
        { word: "true", hint: "All cats have tails. Mittens is a cat. Therefore, Mittens has a tail. (True/False)" },
        { word: "conclusion", hint: "Given the statements, what is a logical conclusion?" },
        { word: "valid", hint: "If the premises are true, is the argument valid or invalid?" },
        { word: "inference", hint: "What can be inferred from the given statements?" },
        { word: "reasoning", hint: "Apply deductive reasoning to analyze the given statements." },
        { word: "logic", hint: "What is the logical consequence of the provided information?" },
        { word: "assertion", hint: "Determine the correctness of the assertion based on the given statements." },
        { word: "inductive", hint: "Contrast deductive and inductive reasoning." },
        { word: "fallacy", hint: "Identify any logical fallacies in the argument." },
    
        // Dices
        { word: "4", hint: "If the numbers on the adjacent faces of a six-sided die add up to 7, what is the number opposite to 3?" },
        { word: "2", hint: "If a six-sided die is rolled, what is the probability of getting an even number?" },
        { word: "probability", hint: "Calculate the probability of rolling a total of 8 with two six-sided dice." },
        { word: "faces", hint: "How many faces does a regular tetrahedron (four-sided die) have?" },
        { word: "random", hint: "Explain the concept of randomness in the context of rolling a fair die." },
        { word: "outcome", hint: "Each possible result of rolling a die is called a __?" },
        { word: "cubical", hint: "What geometric shape is associated with most standard dice?" },
        { word: "loaded", hint: "What is a loaded die, and how does it differ from a fair die?" },
        { word: "dice", hint: "What is the singular form of the word 'dice'?" },
        { word: "combinations", hint: "How many different combinations are possible when rolling two six-sided dice?" },
    
        // Directions
        { word: "south", hint: "If you start facing North and turn 180 degrees clockwise, in which direction are you facing now?" },
        { word: "west", hint: "If your initial direction is East and you turn 270 degrees anticlockwise, in which direction are you facing now?" },
        { word: "compass", hint: "Explain the concept of cardinal directions (North, South, East, West)." },
        { word: "navigate", hint: "How do you navigate from one point to another using cardinal directions?" },
        { word: "bearing", hint: "What is the bearing of a direction, and how is it measured?" },
        { word: "orientation", hint: "Discuss the importance of direction and orientation in navigation." },
        { word: "geography", hint: "How does understanding directions relate to geography and map reading?" },
        { word: "polaris", hint: "In the Northern Hemisphere, which star is often used for navigation due to its fixed position?" },
        { word: "clockwise", hint: "If you turn 90 degrees clockwise from the North direction, what direction are you facing?" },
        { word: "landmarks", hint: "How are landmarks used in giving and following directions?" },
    
        // Embedded Images
        { word: "circle", hint: "Find the word hidden in the image: O" },
        { word: "tree", hint: "Find the word hidden in the image: T" },
        { word: "hidden", hint: "Describe the process of finding hidden objects or words in images." },
        { word: "visual", hint: "How does embedded images relate to visual perception and recognition?" },
        { word: "pattern", hint: "Explain the concept of patterns in visual images." },
        { word: "cognition", hint: "Discuss the role of cognition in recognizing objects in images." },
        { word: "observation", hint: "Why is keen observation important in identifying hidden elements in images?" },
        { word: "perception", hint: "How does perception influence the interpretation of embedded images?" },
        { word: "puzzle", hint: "What is the appeal of puzzles involving hidden elements in images?" },
        { word: "visualize", hint: "How can one enhance their ability to visualize and identify hidden images?" },
    
        // Figure Matrix
        { word: "optionc", hint: "Find the missing figure: A, B, C, D, __?" },
        { word: "optiona", hint: "Find the missing figure: X, Y, Z, __?" },
        { word: "pattern", hint: "Identify the underlying pattern or rule in a figure matrix." },
        { word: "sequence", hint: "Explain how figure matrices represent sequences or progressions." },
        { word: "visual", hint: "How does solving figure matrices contribute to visual-spatial intelligence?" },
        { word: "abstraction", hint: "Discuss the role of abstraction in understanding figure matrix problems." },
        { word: "logical", hint: "What logical skills are exercised when solving figure matrix puzzles?" },
        { word: "analogy", hint: "Compare the concept of analogy in figure matrices with other forms of reasoning." },
        { word: "complete", hint: "Complete the figure matrix based on the given rules or patterns." },
        { word: "solve", hint: "What strategies can be employed to solve complex figure matrix problems?" },
    
        // Input-Output
        { word: "output", hint: "If the input is 'CAT,' the output is '3.' What is the output if the input is 'DOG'?" },
        { word: "output", hint: "If the input is '678,' the output is '321.' What is the output if the input is '975'?" },
        { word: "process", hint: "Explain the process of determining output from a given input in an input-output problem." },
        { word: "algorithm", hint: "How can algorithms be used to predict the output in an input-output scenario?" },
        { word: "sequence", hint: "Discuss the role of sequence and pattern recognition in input-output problems." },
        { word: "logical", hint: "What logical reasoning is involved in understanding input-output relationships?" },
        { word: "analyze", hint: "How can one analyze and interpret the rules governing input-output problems?" },
        { word: "transform", hint: "Explain how inputs are transformed into outputs in an input-output system." },
        { word: "pattern", hint: "Identify and describe common patterns used in input-output questions." },
        { word: "predict", hint: "What strategies can be employed to predict output in complex input-output problems?" },
    
        // Mirror and Water Images
        { word: "mirrorimage", hint: "What is the mirror image of the word 'LEVEL'?" },
        { word: "waterimage", hint: "What is the water image of the letter 'M'?" },
        { word: "reflection", hint: "Explain the concept of reflection in the context of mirror and water images." },
        { word: "symmetry", hint: "How does symmetry play a role in determining mirror and water images?" },
        { word: "visual", hint: "How does visual perception contribute to recognizing mirror and water images?" },
        { word: "geometric", hint: "Discuss the geometric principles involved in mirror and water images." },
        { word: "orientation", hint: "How does the orientation of an object affect its mirror or water image?" },
        { word: "analysis", hint: "Analyze the mirror and water images of complex shapes or words." },
        { word: "identify", hint: "What strategies can be used to quickly identify mirror and water images?" },
        { word: "practice", hint: "How can regular practice improve proficiency in solving mirror and water image problems?" },
    
        // Odd One Out
        { word: "pineapple", hint: "Which one is the odd one out? Apple, Banana, Pineapple, Orange" },
        { word: "rectangle", hint: "Which one is the odd one out? Circle, Square, Triangle, Rectangle" },
        { word: "categorize", hint: "Explain the process of categorizing objects and identifying the odd one out." },
        { word: "classify", hint: "How does classification contribute to problem-solving in odd one out questions?" },
        { word: "pattern", hint: "Identify the underlying pattern or rule in odd one out problems." },
        { word: "analyze", hint: "How can one systematically analyze options to determine the odd one out?" },
        { word: "logical", hint: "What logical reasoning is involved in odd one out questions?" },
        { word: "visual", hint: "How does visual perception play a role in identifying the odd one out?" },
        { word: "apply", hint: "Apply strategies to quickly identify the odd one out in a set of objects or words." },
        { word: "variety", hint: "Discuss the variety of odd one out questions and their complexity." },
    
        // Picture Series and Sequences
        { word: "nextimage", hint: "Find the next image in the series: A, B, C, D, __?" },
        { word: "missingimage", hint: "Find the missing image: W, X, Y, Z, __?" },
        { word: "sequence", hint: "Identify the sequence or progression in a series of images." },
        { word: "pattern", hint: "Explain how patterns are formed and continued in picture series." },
        { word: "visual", hint: "How does visual-spatial intelligence contribute to solving picture series problems?" },
        { word: "analysis", hint: "Analyze the elements and details in each image of a picture series." },
        { word: "predict", hint: "Predict the next image based on the established pattern in a picture series." },
        { word: "observe", hint: "How can keen observation enhance performance in picture series questions?" },
        { word: "logical", hint: "What logical skills are employed when deciphering picture series and sequences?" },
        { word: "complexity", hint: "Discuss the complexity of picture series and sequence problems." },
    
        // Paper Folding
        { word: "square", hint: "If you fold a square piece of paper in half, what shape will it be?" },
        { word: "triangle", hint: "If you fold a rectangle in half, what shape will it be?" },
        { word: "symmetry", hint: "Explain the concept of symmetry in the context of paper folding." },
        { word: "fold", hint: "Describe the basic steps involved in folding a paper to create symmetrical shapes." },
        { word: "creases", hint: "How do creases or folds in a paper contribute to creating patterns?" },
        { word: "geometric", hint: "Discuss the geometric principles involved in paper folding." },
        { word: "manipulate", hint: "How does the manipulation of paper contribute to creating different shapes?" },
        { word: "origami", hint: "What is the art of origami, and how does it relate to paper folding?" },
        { word: "visualize", hint: "How can one enhance their ability to visualize and predict outcomes in paper folding?" },
        { word: "paper", hint: "Discuss the versatility of paper folding in artistic and problem-solving contexts." },
    
        // Puzzles
        { word: "jigsaw", hint: "A picture or design that is cut into pieces and needs to be reassembled." },
        { word: "sudoku", hint: "A number puzzle consisting of a grid of squares, divided into nine boxes, each containing nine squares." },
        { word: "logic", hint: "How does logical reasoning play a role in solving puzzles?" },
        { word: "strategy", hint: "Discuss the importance of strategic thinking in puzzle-solving." },
        { word: "pattern", hint: "Identify and exploit patterns in solving various types of puzzles." },
        { word: "challenge", hint: "How do puzzles provide cognitive challenges and mental stimulation?" },
        { word: "creative", hint: "Discuss the creative aspects involved in designing and solving puzzles." },
        { word: "solve", hint: "What strategies can be employed to efficiently solve puzzles?" },
        { word: "enjoyment", hint: "Explore the enjoyment and satisfaction derived from successfully solving puzzles." },
        { word: "diversity", hint: "Discuss the diversity of puzzles and their applications in different fields." },
    
        // Pattern Series and Sequences
        { word: "completepattern", hint: "2, 6, 12, 20, __?" },
        { word: "missingnumber", hint: "3, 7, 15, __?" },
        { word: "sequence", hint: "Identify and describe the sequence or pattern in a numerical series." },
        { word: "predict", hint: "Predict the next number based on the established pattern in a series." },
        { word: "numerical", hint: "Discuss the role of numerical patterns in problem-solving." },
        { word: "logical", hint: "What logical skills are employed when deciphering pattern series and sequences?" },
        { word: "mathematical", hint: "Explore the mathematical concepts related to pattern series and sequences." },
        { word: "observe", hint: "How can keen observation enhance performance in pattern series questions?" },
        { word: "complexity", hint: "Discuss the complexity of pattern series and sequence problems." },
        
       
            // 25. Order & Ranking
            { word: "third", hint: "If John is fifth from the left and Mark is sixth from the right, who is in the middle?" },
            { word: "tenth", hint: "In a row of students, Jack is seventh from the left and Jill is ninth from the right. How many students are there in the row?" },
            { word: "first", hint: "If Harry is before Ron but after Hermione, who is first?" },
            { word: "fifth", hint: "If Alex is standing in a row, and there are eight people to her left and six to her right, what is her position from the right?" },
            { word: "eighth", hint: "If Peter is standing 12th from the left and 14th from the right, what is his position from the right?" },
            { word: "fourth", hint: "If Emma is standing in a row of students, and she is neither the first nor the last, what is her position?" },
            { word: "seventh", hint: "In a group of 20 people, John is ranked 14th from the top. What is his rank from the bottom?" },
            { word: "second", hint: "If Mary is standing sixth from the left and ninth from the right, what is her position?" },
            { word: "sixth", hint: "If Susan is standing in a row and is neither the first nor the last, what is her position?" },
            { word: "twelfth", hint: "If Kate is standing fifth from the left and eighth from the right, what is her position from the right?" },
        
            // 26. Seating Arrangements
            { word: "adjacent", hint: "If Tim is sitting next to Jane, what is Jane's position concerning Tim?" },
            { word: "opposite", hint: "If David is sitting directly across from Sarah, what is Sarah's position concerning David?" },
            { word: "left", hint: "If Alex is sitting to the left of Michael, where is Michael sitting concerning Alex?" },
            { word: "right", hint: "If Laura is sitting to the right of Robert, where is Robert sitting concerning Laura?" },
            { word: "between", hint: "If Alice is sitting between Bob and Carol, who is on Alice's right?" },
            { word: "corner", hint: "If Sam is sitting in one of the corners, which corner is he sitting in?" },
            { word: "center", hint: "If Anna is sitting in the middle, who is sitting directly across from her?" },
            { word: "edge", hint: "If Mark is sitting on the edge, is he sitting at the left or right end?" },
            { word: "front", hint: "If John is sitting in the front row, is he sitting closer to the stage or the back?" },
            { word: "back", hint: "If Emily is sitting in the back row, is she sitting closer to the stage or the front?" },
        
            // 27. Shape Construction
            { word: "triangle", hint: "Construct a three-sided polygon." },
            { word: "rectangle", hint: "Construct a four-sided polygon with opposite sides of equal length." },
            { word: "pentagon", hint: "Construct a five-sided polygon." },
            { word: "hexagon", hint: "Construct a six-sided polygon." },
            { word: "octagon", hint: "Construct an eight-sided polygon." },
            { word: "circle", hint: "Construct a round shape with no corners." },
            { word: "parallelogram", hint: "Construct a four-sided figure with opposite sides parallel." },
            { word: "rhombus", hint: "Construct a four-sided figure with all sides of equal length." },
            { word: "star", hint: "Construct a shape with at least five points." },
            { word: "ellipse", hint: "Construct a shape that is elongated and resembles a flattened circle." },
        
            // 28. Statement and Assumptions
            { word: "assumption", hint: "A statement that is taken for granted without proof." },
            { word: "conclusion", hint: "A decision reached by reasoning from given premises." },
            { word: "premise", hint: "A statement or proposition on which an argument is based." },
            { word: "inference", hint: "A conclusion reached on the basis of evidence and reasoning." },
            { word: "validity", hint: "The quality of being logically or factually sound." },
            { word: "implied", hint: "Suggested but not directly expressed." },
            { word: "explicit", hint: "Stated clearly and in detail, leaving no room for confusion or doubt." },
            { word: "logical", hint: "Characterized by clear, sound reasoning." },
            { word: "assess", hint: "Evaluate or estimate the nature, ability, or quality of." },
            { word: "interpretation", hint: "An explanation or way of explaining." },
        
            // 29. Statement and Conclusions
            { word: "conclusion", hint: "A judgment or decision reached by reasoning." },
            { word: "analyze", hint: "Examine methodically and in detail the constitution or structure of something." },
            { word: "deduction", hint: "The action of deducting or subtracting something." },
            { word: "infer", hint: "Deduce or conclude information from evidence and reasoning rather than from explicit statements." },
            { word: "coherent", hint: "Logical and consistent." },
            { word: "evaluate", hint: "Form an idea of the amount, number, or value of; assess." },
            { word: "convincing", hint: "Capable of causing someone to believe that something is true or real." },
            { word: "justify", hint: "Show or prove to be right or reasonable." },
            { word: "rational", hint: "Based on or in accordance with reason or logic." },
            { word: "persuasive", hint: "Good at persuading someone to do or believe something through reasoning or the use of temptation." },
        
            // 30. Syllogism
            { word: "premise", hint: "A statement that is assumed to be true and is used as the basis of an argument." },
            { word: "conclusion", hint: "A statement or judgment that follows logically from given premises." },
            { word: "major premise", hint: "The first or primary premise in a syllogism." },
            { word: "minor premise", hint: "The second premise in a syllogism, providing additional information to support the conclusion." },
            { word: "valid", hint: "Having sound reasoning or argument." },
            { word: "invalid", hint: "Not sound or cogent; not well-founded." },
            { word: "categorical syllogism", hint: "A syllogism in which each statement begins with 'all,' 'no,' or 'some.'" },
            { word: "hypothetical syllogism", hint: "A syllogism having a conditional statement as one of its premises." },
            { word: "disjunctive syllogism", hint: "A syllogism having a disjunctive statement as one of its premises." },
            { word: "middle term", hint: "In a syllogism, the term that appears in both premises but not in the conclusion." },
        ];
        
