const recipes = {
    breakfast: [
      {
        name: 'Oatmeal',
        ingredients: [
          { name: 'rolled oats', amount: '1.2 cup' },
          { name: 'water', amount: '1 cup' },
          { name: 'milk', amount: '2-3 tablespoons' },
          { name: 'brown sugar', amount: '1 tsp' },
          { name: 'maple syrup', amount: '1 tsp' },
          { name: 'cinnamon', amount: '1/8 tsp' }
        ],
        directions: [
          'Place oats and water in microwave safe bowl.',
          'Heat for 90 seconds. Add 15 second increments until oatmeal is puffed and softened.',
          'Add milk, brown sugar, cinnamon, and syrup.',
          'Stir before serving.'
        ]
      },
      {
        name: 'Orange Raspberry Smoothie',
        ingredients: [
          { name: 'frozen raspberries', amount: '1/2 cup' },
          { name: 'orange juice', amount: '1/2 cup' },
          { name: 'honey', amount: '1/2 tsp' }
        ],
        directions: [
          'Put all ingredients in the blender until completely smooth.',
          'Enjoy!'
        ]
      },
      {
        name: 'Strawberry Protein Smoothie',
        ingredients: [
          { name: 'frozen strawberries', amount: '1/2 cup' },
          { name: 'milk', amount: '1/2 cup' },
          { name: 'honey', amount: '1/2 tsp' },
          { name: 'peanut butter (optional)', amount: '1/4 cup' }
        ],
        directions: [
          'Put all ingredients in the blender until completely smooth.',
          'Enjoy!'
        ]
      },
      {
        name: 'Spinach Jack Omelette',
        ingredients: [
          { name: 'large eggs', amount: '2' },
          { name: 'salt & pepper', amount: 'Pinch' },
          { name: 'olive oil', amount: '1/2 tablespoon' },
          { name: 'spinach', amount: '1/4 cup loosely packed' },
          { name: 'shredded Monterey jack cheese', amount: '2 tablespoons' }
        ],
        directions: [
          'In small bowl, whisk eggs, salt, and pepper until lightly frothy.',
          'In non-stick pan, heat the oil over medium-low.',
          'Pour in the eggs and tilt pan to spread them evenly.',
          'Cook omelette for 2 to 3 minutes, until edges are cooked and the top is slightly wet.',
          'Add cheese and spinach in the middle.',
          'Fold omelette in half, allow cheese to melt.',
          'Remove from pan and enjoy!'
        ]
      }
    ],
    lunch: [
      {
        name: 'Chicken Caesar Wrap',
        ingredients: [
          { name: 'rotisserie chicken (shredded)', amount: 'to taste' },
          { name: 'lettuce', amount: 'to taste' },
          { name: 'parmesan cheese shredded', amount: 'to taste' },
          { name: 'Caesar dressing', amount: 'to taste' },
          { name: 'flour tortilla wrap', amount: '1' }
        ],
        directions: [
          'Place ingredients one at a time in vertical row on the tortilla.',
          'When contents are in ratio to your liking, fold left and right edges of the tortilla in.',
          'Tuck and roll the tortilla with ingredients into a wrap.',
          'Place in fridge, or slice into pinwheels.'
        ]
      },
      {
        name: 'Grilled Cheese',
        ingredients: [
          { name: 'shredded cheddar cheese', amount: 'to taste' },
          { name: 'butter', amount: 'to taste' },
          { name: 'mayonnaise (optional)', amount: 'to taste' },
          { name: 'sliced tomatoes', amount: 'to taste' },
          { name: 'bread', amount: 'your choice' },
          { name: 'sliced scallops', amount: 'to taste' },
          { name: 'salt & pepper', amount: 'to taste' }
        ],
        directions: [
          'Heat pan or griddle to medium heat.',
          'Butter outsides of bread, smear light layer of mayo on opposite side.',
          'When heated, place bread butter side down on hot surface.',
          'While toasting, put thick layer of cheese, scallops, salt, pepper, and tomatoes on bread.',
          'Spread more cheese over tomatoes then place another piece of bread mayo side down.',
          'Flip sandwich and allow other side to cook.',
          'Slice diagonally and serve.'
        ]
      },
      {
        name: 'Greek Salad',
        ingredients: [
          { name: 'sliced fresh tomatoes', amount: '1/2 cup' },
          { name: 'sliced purple onion', amount: '1/4 cup' },
          { name: 'sliced cucumber', amount: '1' },
          { name: 'olive oil', amount: '2 tablespoons' },
          { name: 'oregano', amount: '1 tsp' },
          { name: 'salt', amount: '1/2 tsp' },
          { name: 'pepper', amount: '1/2 tsp' },
          { name: 'feta cheese', amount: '1/4 cup' },
          { name: 'sliced olives', amount: '1 small can' }
        ],
        directions: [
          'Slice all vegetables.',
          'Mix ingredients thoroughly in a large salad bowl.',
          'Enjoy!'
        ]
      }
    ],
    dinner: [
      {
        name: 'Chicken Pasta Salad',
        ingredients: [
          { name: 'penne pasta', amount: '1 lb.' },
          { name: 'plain yogurt (not Greek)', amount: '1 cup' },
          { name: 'mayonnaise', amount: '3/4 cup' },
          { name: 'grainy dijon mustard', amount: '2 Tbsp.' },
          { name: 'lemon zest', amount: '1 tsp.' },
          { name: 'lemon juice', amount: '2 Tbsp.' },
          { name: 'kosher salt', amount: '1 tsp.' },
          { name: 'ground black pepper', amount: '1/2 tsp.' },
          { name: 'cayenne pepper', amount: '1/4 tsp.' },
          { name: 'shredded rotisserie chicken', amount: '3 cups' },
          { name: 'celery stalks, chopped', amount: '3' },
          { name: 'green onions, thinly sliced', amount: '4' },
          { name: 'red grapes, halved', amount: '2 cups' },
          { name: 'fresh parsley, chopped', amount: '3/4 cup' },
          { name: 'fresh dill', amount: '1/4 cup' },
          { name: 'sliced almonds, toasted', amount: '1/2 cup' },
          { name: 'butter lettuce', amount: 'to serve' }
        ],
        directions: [
          'Bring a large pot of salted water to a boil. Add the pasta and cook one minute longer than package directions.',
          'Drain, rinse with cold water, and let cool.',
          'In a large bowl, combine yogurt, mayonnaise, mustard, lemon zest, lemon juice, salt, pepper, and cayenne.',
          'Fold in pasta, chicken, celery, green onion, grapes, parsley, and dill.',
          'Refrigerate until ready to eat.',
          'Sprinkle almonds over salad before serving on butter lettuce.'
        ]
      },
      {
        name: 'Italian Ham Sandwich',
        ingredients: [
          { name: 'red onion, thinly sliced', amount: '1' },
          { name: 'apple cider vinegar', amount: '3/4 cup' },
          { name: 'kosher salt', amount: '1 Tbsp.' },
          { name: 'sugar', amount: '1 Tbsp.' },
          { name: 'coriander seeds, crushed', amount: '1 tsp.' },
          { name: 'mayonnaise', amount: '1/2 cup' },
          { name: 'pesto', amount: '1/4 cup' },
          { name: 'herbed focaccia, cut in half horizontally', amount: '4 pieces' },
          { name: 'tomato, sliced', amount: '4 thick slices' },
          { name: 'honey ham, thinly sliced', amount: '1 lb.' },
          { name: 'baby arugula', amount: '1 1/2 cups' }
        ],
        directions: [
          'For the pickled red onion: Combine red onion, vinegar, salt, sugar, and coriander seeds in a saucepan. Simmer until onion changes color, about 2 minutes.',
          'Remove from heat, pour into heatproof bowl, and press onion slices to submerge.',
          'Let cool for 1 hour.',
          'For the pesto mayonnaise: Mix mayonnaise and pesto together and refrigerate.',
          'For the sandwiches: Preheat the oven to 400˚F. Toast focaccia for 8-10 minutes.',
          'Spread pesto mayonnaise on the focaccia.',
          'Layer tomato, ham, arugula, and pickled onion on the bottom halves.',
          'Top with the other half of focaccia.'
        ]
      },
      {
        name: 'TexMex Grain Bowl',
        ingredients: [
          { name: 'carrots, peeled and cut into pieces', amount: '2 large' },
          { name: 'parsnips, peeled and cut into pieces', amount: '2 large' },
          { name: 'vegetable oil', amount: '4 Tbsp' },
          { name: 'ground cumin', amount: '1 1/2 tsp' },
          { name: 'chili powder', amount: '1 tsp' },
          { name: 'salt', amount: '1 1/4 tsp' },
          { name: 'pepper', amount: '1/4 tsp' },
          { name: 'thin sliced red cabbage', amount: '4 cups' },
          { name: 'limes', amount: '3' },
          { name: 'quinoa', amount: '1 1/2 cups' },
          { name: 'fresh cilantro, chopped', amount: '1 cup' },
          { name: 'onion, chopped', amount: '1 small' },
          { name: 'pinto beans, drained/rinsed', amount: '1 can' },
          { name: 'avocados, sliced', amount: '2 small' }
        ],
        directions: [
          'Preheat oven to 425˚F. Toss carrots, parsnips, oil, cumin, chili powder, salt, and pepper on a baking sheet. Roast for 25-30 minutes.',
          'In a bowl, massage cabbage with lime juice, oil, salt, and pepper.',
          'Cook quinoa as directed and fluff with a fork. Stir in lime zest and cilantro.',
          'Cook onion with salt and pepper in a skillet, adding pinto beans to warm through.',
          'Serve quinoa with roasted veggies, bean mixture, cabbage, and avocado.'
        ]
      }
    ]
  };
  