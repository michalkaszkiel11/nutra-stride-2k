const healthConditionsData = [
  {
    // Condition details
    title: "Hypertension",
    conditionDesc:
      "A condition characterized by high blood pressure, requiring dietary regulation and exercise.",
    image:
      "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701694683/healthcondition/hypertension.png",

    conditionChoose: {
      diet: [
        {
          healthCondition: "Hypertension",
          description:
            "Focus on low-sodium foods, rich in potassium, magnesium, and calcium. Emphasize whole grains, lean proteins, and healthy fats. Avoid excessive salt and processed foods.",
          meals: {
            breakfast: [
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701697649/diet/1b1.jpg",
                title: "Potassium Punch Smoothie",
                content: "Banana and chia seed smoothie.",
                healthImpactRange: 92,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701698391/diet/1b2.jpg ",
                title: "Wholesome Grain Bowl",
                content: "Oatmeal with fresh berries and nuts.",
                healthImpactRange: 90,
              },
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701698516/diet/1b3.jpg",
                title: "Omega Morning Muffin",
                content: "Walnut and blueberry muffin (whole grain).",
                healthImpactRange: 88,
              },
            ],
            lunch: [
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701698773/diet/1l1.jpg ",
                title: "Heart-Healthy Salad",
                content:
                  "Spinach and kidney bean salad with a light vinaigrette.",
                healthImpactRange: 91,
              },
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701699258/diet/1l2.jpg",
                title: "Quinoa Veggie Delight",
                content:
                  "Quinoa salad with grilled vegetables and lemon dressing.",
                healthImpactRange: 91,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701699515/diet/1l3.jpg ",
                title: "Tuna Greens Sandwich",
                content:
                  "Tuna sandwich on whole grain bread with mixed greens.",
                healthImpactRange: 89,
              },
            ],
            dinner: [
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701699782/diet/1d1.jpg ",
                title: "Mackerel & Roots",
                content: "Grilled mackerel with roasted sweet potatoes.",
                healthImpactRange: 93,
              },
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701699884/diet/1d2.jpg",
                title: "Lean Poultry Platter",
                content: "Steamed chicken with herbs and steamed broccoli.",
                healthImpactRange: 89,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701699984/diet/1d3.jpg ",
                title: "Salmon Omega Feast",
                content: "Baked salmon with green beans and almonds.",
                healthImpactRange: 92,
              },
            ],
          },
        },
      ],

      workout: [
        {
          workoutTitle: "Hypertension",
          workoutDesc:
            "Regular physical activity is key in managing blood pressure and preventing complications associated with hypertension. It can strengthen the heart, improve blood circulation, and help maintain a healthy weight.",

          workoutVideo:
            "https://res.cloudinary.com/dddyd5tyq/raw/upload/v1702026311/video/hypertension",
            advice:"Every step you take is a step towards a healthier heart and a stronger you.",
          workoutImage: "https://res.cloudinary.com/dddyd5tyq/image/upload/v1702149552/image-workoutPage/g8pvqz2lxcxy5mtcnnjv.png",
        },
      ],
    },
  },
  {
    // Condition details
    title: "Coronary Artery Disease",
    conditionDesc:
      "A heart condition that involves narrowed or blocked coronary arteries.",
    image:
      "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701684389/healthcondition/coronary.png",

    conditionChoose: {
      diet: [
        {
          // Special Diet
          healthCondition: "Coronary Artery Disease",
          description:
            "Prioritize heart-healthy fats, especially omega-3s. Increase fiber intake through whole grains, fruits, and vegetables. Limit saturated fats, trans fats, and cholesterol.",
          meals: {
            breakfast: [
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701702252/diet/2b1.jpg ",
                title: "Flaxseed Fiber Boost",
                content: "Greek yogurt with flaxseeds and strawberries.",
                healthImpactRange: 91,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701702721/diet/2b2.jpg ",
                title: "Berry Nutty Morning",
                content:
                  "Bran flakes with almond milk and a handful of almonds.",
                healthImpactRange: 88,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701703642/diet/2b3.jpg ",
                title: "Heart-Healthy Oats",
                content: "Oatmeal with walnuts and dried fruits.",
                healthImpactRange: 90,
              },
            ],
            lunch: [
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701703866/diet/2l1.jpg",
                title: "Omega Salad",
                content:
                  "Sardine salad with mixed greens and olive oil dressing.",
                healthImpactRange: 89,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701703942/diet/2l2.jpg ",
                title: "Lean Protein Plate",
                content: "Grilled turkey with a side salad.",
                healthImpactRange: 90,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701704042/diet/2l3.jpg ",
                title: "Veggie Boost Bowl",
                content: "Chickpea and vegetable stir-fry over brown rice.",
                healthImpactRange: 88,
              },
            ],
            dinner: [
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701704176/diet/2d1.jpg ",
                title: "Mediterranean Delight",
                content:
                  "Grilled trout with sautéed spinach in garlic and olive oil.",
                healthImpactRange: 92,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701704258/diet/2d2.jpg ",
                title: "Lean & Green",
                content: "Chicken stir-fry with bell peppers and snow peas.",
                healthImpactRange: 89,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701704325/diet/2d3.jpg ",
                title: "Wholesome Seafood Pasta",
                content:
                  "Whole grain spaghetti with shrimp and tomato basil sauce.",
                healthImpactRange: 90,
              },
            ],
          },
        },
      ],
      workout: [
        {
          // Special Workout
          workoutTitle: "Coronary Artery",
          workoutDesc:
            "Regular exercise in a Coronary Artery Disease Workout Plan strengthens the heart, improves blood flow, and helps manage risk factors like high blood pressure and cholesterol. It's essential for enhancing heart health and reducing the progression of artery-clogging in individuals with CAD.",

          workoutVideo:
            "https://res.cloudinary.com/dddyd5tyq/raw/upload/v1702026493/video/Coronary",
            advice:"Embrace each day with a heart full of courage and a journey towards a healthier you.",
          workoutImage: "https://res.cloudinary.com/dddyd5tyq/image/upload/v1702149592/image-workoutPage/eaeyqc0z5p1etigimbpx.png",
        },
      ],
    },
  },
  {
    // Condition details
    title: "Peripheral Vascular Disease",
    conditionDesc:
      "A condition affecting blood circulation, necessitating dietary and exercise modifications.",
    image:
      "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701684923/healthcondition/peripheral.png",

    conditionChoose: {
      diet: [
        {
          // Special Diet
          healthCondition: "Peripheral Vascular Disease",
          description:
            "Emphasize foods that improve circulation and reduce inflammation. Focus on omega-3 fatty acids, antioxidants, and vitamin E. Limit saturated and trans fats.",
          meals: {
            breakfast: [
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701716079/diet/3b1.jpg ",
                title: "Circulation Smoothie",
                content: "Spinach, kiwi, and almond smoothie.",
                healthImpactRange: 92,
              },
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701716177/diet/3b2.jpg",
                title: "Antioxidant Acai Bowl",
                content:
                  "Acai bowl topped with granola, blueberries, and chia seeds.",
                healthImpactRange: 90,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701716323/diet/3b3.jpg ",
                title: "Omega Morning Toast",
                content:
                  "Whole grain toast with avocado and a sprinkle of chia seeds.",
                healthImpactRange: 91,
              },
            ],
            lunch: [
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701716460/diet/3l1.jpg",
                title: "Heart & Vessel Salad",
                content: "Kale and beet salad with walnuts and feta cheese.",
                healthImpactRange: 89,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701716554/diet/3l2.jpg ",
                title: "Lean Lunch Wrap",
                content:
                  "Whole grain wrap with grilled chicken, spinach, and hummus.",
                healthImpactRange: 88,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701716624/diet/3l3.jpg ",
                title: "Vitamin E Veggie Stir-Fry",
                content:
                  "Broccoli, bell pepper, and almond stir-fry with a touch of sesame oil.",
                healthImpactRange: 89,
              },
            ],
            dinner: [
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701716824/diet/3d1.jpg ",
                title: "Circulation Seafood Platter",
                content: "Grilled mackerel with roasted Brussels sprouts.",
                healthImpactRange: 92,
              },
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701716881/diet/3d2.jpg",
                title: "Turmeric Tofu Bowl",
                content:
                  "Tofu stir-fry with turmeric, broccoli, and brown rice.",
                healthImpactRange: 90,
              },
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701717001/diet/3d3.jpg",
                title: "Heart-Healthy Herb Chicken",
                content:
                  "Baked chicken with herbs, olive oil, and a side of quinoa salad.",
                healthImpactRange: 91,
              },
            ],
          },
        },
      ],
      workout: [
        {
          // Special Workout
          workoutTitle: "Peripheral Vascular Disease",
          workoutDesc:
            "Exercise plays a vital role in managing Peripheral Vascular Disease by improving circulation, enhancing muscle strength in the lower extremities, and reducing symptoms like leg pain and cramping. Consistent physical activity can significantly improve walking distance and quality of life for individuals with PVD.",
          workoutVideo:
            "https://res.cloudinary.com/dddyd5tyq/raw/upload/v1702026578/video/Peripheral",
            advice:"Step by step, stride by stride, embrace your journey to healthier veins and a vibrant life.",
          workoutImage: "https://res.cloudinary.com/dddyd5tyq/image/upload/v1702149608/image-workoutPage/m1jgw1l4ohgmpv5asmic.png",
        },
      ],
    },
  },
  {
    // Condition details for Type 2 Diabetes
    title: "Type 2 Diabetes",
    conditionDesc:
      "A metabolic disorder characterized by high blood sugar, insulin resistance, and relative lack of insulin.",
    image:
      "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701685613/healthcondition/type.png",

    conditionChoose: {
      diet: [
        {
          // Special Diet
          healthCondition: "Type 2 Diabetes",
          description:
            "Focus on low-glycemic foods that help stabilize blood sugar levels. Prioritize whole grains, lean proteins, and healthy fats. Limit refined carbohydrates and added sugars.",
          meals: {
            breakfast: [
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701717085/diet/4b1.jpg",
                title: "Steady Sugar Smoothie",
                content:
                  "Blueberry, spinach, and chia seed smoothie with almond milk.",
                healthImpactRange: 92,
              },
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701717166/diet/4b2.jpg",
                title: "Whole Grain Start",
                content:
                  "Quinoa porridge topped with nuts, seeds, and a dash of cinnamon.",
                healthImpactRange: 90,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701717217/diet/4b3.jpg ",
                title: "Balanced Breakfast Bowl",
                content:
                  "Greek yogurt with walnuts, berries, and a sprinkle of flaxseeds.",
                healthImpactRange: 91,
              },
            ],
            lunch: [
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701717280/diet/4l1.jpg ",
                title: "Lean Lunch Plate",
                content:
                  "Grilled chicken salad with mixed greens, avocado, and vinaigrette.",
                healthImpactRange: 90,
              },
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701717325/diet/4l2.jpg",
                title: "Glycemic Guard Soup",
                content:
                  "Lentil and vegetable soup with a side of whole grain bread.",
                healthImpactRange: 89,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701717370/diet/4l3.jpg ",
                title: "Stable Sugar Stir-Fry",
                content:
                  "Beef and broccoli stir-fry served over cauliflower rice.",
                healthImpactRange: 88,
              },
            ],
            dinner: [
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701717418/diet/4d1.jpg ",
                title: "Diabetic Delight Pasta",
                content:
                  "Whole grain spaghetti with tomato basil sauce and grilled vegetables.",
                healthImpactRange: 87,
              },
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701717477/diet/4d2.jpg",
                title: "Balanced Blood Sugar Bowl",
                content:
                  "Salmon fillet over a bed of mixed grains, steamed asparagus, and a lemon herb dressing.",
                healthImpactRange: 89,
              },
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701781099/diet/qfauo10splwjysifuosy.jpg",
                title: "Wholesome Wrap",
                content:
                  "Whole grain wrap filled with hummus, lettuce, grilled chicken, and roasted peppers.",
                healthImpactRange: 88,
              },
            ],
          },
        },
      ],
      workout: [
        {
          // Special Workout
          workoutTitle: "Type 2 Diabetes",
          workoutDesc:
            "Regular exercise is key in managing Type 2 Diabetes, as it helps improve insulin sensitivity, control blood sugar levels, and reduce the risk of cardiovascular disease. Engaging in consistent physical activity also aids in weight management, a crucial aspect of Type 2 Diabetes care.",
          workoutVideo:
            "https://res.cloudinary.com/dddyd5tyq/raw/upload/v1702026666/video/type2",
            advice:"Take control of your journey with each healthy choice, paving the way to a balanced and vibrant life.",
          workoutImage: "https://res.cloudinary.com/dddyd5tyq/image/upload/v1702149671/image-workoutPage/the284tghg8wsybpekjx.webp",
        },
      ],
    },
  },
  {
    // Condition details
    title: "Metabolic Syndrome",
    conditionDesc:
      "A cluster of conditions that increase the risk of heart disease, stroke, and type 2 diabetes.",
    image:
      "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701686234/healthcondition/metabolic.png",

    conditionChoose: {
      diet: [
        {
          // Special Diet
          healthCondition: "Metabolic Syndrome",
          description:
            "Emphasize nutrient-dense, whole foods. Increase intake of fiber, lean proteins, and omega-3s. Limit processed foods, saturated fats, and added sugars.",
          meals: {
            breakfast: [
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701717670/diet/5b1.jpg ",
                title: "Metabolic Boost Muffin",
                content:
                  "Bran muffin with apple slices and a dollop of almond butter.",
                healthImpactRange: 88,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701717712/diet/5b2.jpg ",
                title: "Energizing Oats",
                content:
                  "Steel-cut oatmeal topped with mixed berries and sunflower seeds.",
                healthImpactRange: 90,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701782748/diet/ytff9ggnncmatxydbuxd.jpg ",
                title: "Protein Power Smoothie",
                content:
                  "Spinach, Greek yogurt, and flaxseed smoothie with a touch of honey.",
                healthImpactRange: 89,
              },
            ],
            lunch: [
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701783069/diet/vcky6j57ybxfnkcguimq.jpg",
                title: "Heart-Healthy Salad",
                content:
                  "Mixed greens, tuna, olives, cherry tomatoes, and a light olive oil dressing.",
                healthImpactRange: 91,
              },
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701783207/diet/etxz5de82i7gi71hrogk.jpg",
                title: "Lean & Clean Stir-Fry",
                content:
                  "Shrimp and vegetable stir-fry with ginger, garlic, and a touch of soy sauce.",
                healthImpactRange: 89,
              },
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701717988/diet/5l3.jpg",
                title: "Wholesome Whole Grains",
                content:
                  "Brown rice bowl with black beans, salsa, avocado, and grilled chicken strips.",
                healthImpactRange: 88,
              },
            ],
            dinner: [
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701718064/diet/5d1.jpg",
                title: "Metabolic Boost Plate",
                content:
                  "Grilled trout with a side of roasted Brussels sprouts and quinoa.",
                healthImpactRange: 92,
              },
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701718109/diet/5d2.jpg",
                title: "Balanced Dinner Bowl",
                content:
                  "Chickpea curry with mixed vegetables served over brown rice.",
                healthImpactRange: 89,
              },
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701718164/diet/5d3.jpg",
                title: "Heart-Healthy Herb Chicken",
                content:
                  "Baked chicken with herbs, olive oil, and a side of steamed green beans.",
                healthImpactRange: 91,
              },
            ],
          },
        },
      ],
      workout: [
        {
          // Special Workout
          workoutTitle: "Metabolic Syndrome",
          workoutDesc:
            "Exercise is crucial in managing Metabolic Syndrome, as it effectively lowers the risk of cardiovascular diseases by improving heart health, enhancing insulin sensitivity, and aiding in weight reduction. Regular physical activity also helps regulate blood sugar, blood pressure, and cholesterol levels, integral components of metabolic health.",
          workoutVideo:
            "https://res.cloudinary.com/dddyd5tyq/raw/upload/v1702026923/video/metabolic",
            advice:"Empower your health with every positive step, transforming challenges into a journey of wellness and vitality.",
          workoutImage: "https://res.cloudinary.com/dddyd5tyq/image/upload/v1702149682/image-workoutPage/bt14ym5kwu32pvpgqlrm.webp",
        },
      ],
    },
  },
  {
    // Condition details
    title: "Obesity",
    conditionDesc:
      "A metabolic condition characterized by excessive body fat that increases the risk of health problems.",
    image:
      "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701686648/healthcondition/obesity.png",

    conditionChoose: {
      diet: [
        {
          // Special Diet
          healthCondition: "Obesity",
          description:
            "Focus on calorie-controlled meals rich in whole foods. Prioritize vegetables, lean proteins, and whole grains. Limit sugary drinks, processed foods, and excessive fats.",
          meals: {
            breakfast: [
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701718809/diet/6b1.jpg ",
                title: "Lean Green Smoothie",
                content: "Spinach, cucumber, celery, and apple smoothie.",
                healthImpactRange: 93,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701718862/diet/6b2.jpg ",
                title: "Protein-Packed Porridge",
                content:
                  "Oatmeal with almonds, chia seeds, and a touch of honey.",
                healthImpactRange: 91,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701718908/diet/6b3.jpg ",
                title: "Fiber-Full Fruit Bowl",
                content: "Mixed fruit salad with a sprinkle of flaxseeds.",
                healthImpactRange: 92,
              },
            ],
            lunch: [
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701718975/diet/6l1.jpg ",
                title: "Vibrant Veggie Salad",
                content:
                  "Kale, cherry tomatoes, carrot, cucumber, and grilled chicken with lemon vinaigrette.",
                healthImpactRange: 90,
              },
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701719050/diet/6l2.jpg",
                title: "Hearty Healthy Soup",
                content: "Vegetable and lentil soup.",
                healthImpactRange: 88,
              },
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701719088/diet/6l3.jpg",
                title: "Lean Lunch Wrap",
                content:
                  "Whole grain wrap filled with turkey slices, lettuce, and tomato.",
                healthImpactRange: 87,
              },
            ],
            dinner: [
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701719147/diet/6d1.jpg",
                title: "Balanced Plate",
                content: "Steamed fish fillet, quinoa, and roasted asparagus.",
                healthImpactRange: 93,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701719200/diet/6d2.jpg ",
                title: "Wholesome Whole Grains",
                content: "Brown rice and vegetable stir-fry with tofu.",
                healthImpactRange: 89,
              },
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701719252/diet/6d3.jpg",
                title: "Lean Protein Delight",
                content:
                  "Grilled chicken breast with a side of green bean almondine.",
                healthImpactRange: 91,
              },
            ],
          },
        },
      ],
      workout: [
        {
          // Special Workout
          workoutTitle: "Obesity",
          workoutDesc:
            "Regular exercise is a cornerstone in the management of obesity, aiding in weight loss and reducing the risk of associated health conditions by improving metabolic health and cardiovascular fitness. Consistent physical activity helps burn calories, build muscle, and positively influence overall well-being.",
          workoutVideo:
            "https://res.cloudinary.com/dddyd5tyq/raw/upload/v1702027047/video/obesity",
            advice:"Celebrate every small victory on your journey to a healthier, more joyful you.",
          workoutImage: "https://res.cloudinary.com/dddyd5tyq/image/upload/v1702149694/image-workoutPage/lwdpafatj8x5g7qs8ujk.webp",
        },
      ],
    },
  },
  {
    // Condition details
    title: "Osteoporosis",
    conditionDesc:
      "A bone condition that leads to an increased risk of fractures.",
    image:
      "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701686852/healthcondition/osteoporosis.png",

    conditionChoose: {
      diet: [
        {
          // Special Diet
          healthCondition: "Osteoporosis",
          description:
            "Emphasize calcium and vitamin D-rich foods. Include leafy greens, dairy or fortified alternatives, and fish. Limit excessive sodium and caffeine.",
          meals: {
            breakfast: [
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701719474/diet/7b1.jpg ",
                title: "Bone Boost Smoothie",
                content:
                  "Spinach, almond milk (fortified with calcium), and chia seeds smoothie.",
                healthImpactRange: 92,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701719522/diet/7b2.jpg ",
                title: "Calcium Kickstart",
                content: "Greek yogurt with almonds and honey.",
                healthImpactRange: 90,
              },
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701783207/diet/etxz5de82i7gi71hrogk.jpg",
                title: "Morning Sunlight Bowl",
                content: "Scrambled eggs with mushrooms and cheese.",
                healthImpactRange: 91,
              },
            ],
            lunch: [
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701719652/diet/7l1.jpg ",
                title: "Strong Bones Salad",
                content:
                  "Sardines, mixed greens, cherry tomatoes, and feta cheese with olive oil dressing.",
                healthImpactRange: 92,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701719697/diet/7l2.jpg ",
                title: "Mineral Rich Soup",
                content: "Spinach and lentil soup with a touch of cream.",
                healthImpactRange: 89,
              },
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701783874/diet/oaqng2hjgzequyoimwal.jpg",
                title: "Protein & Calcium Wrap",
                content:
                  "Whole grain wrap filled with hummus, lettuce, and grilled chicken.",
                healthImpactRange: 88,
              },
            ],
            dinner: [
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701719809/diet/7d1.jpg",
                title: "Bone Health Plate",
                content: "Grilled salmon, quinoa, and steamed broccoli.",
                healthImpactRange: 94,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701719855/diet/7d2.jpg ",
                title: "Nutrient-Dense Stir-Fry",
                content: "Tofu and vegetable stir-fry with sesame seeds.",
                healthImpactRange: 90,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701719939/diet/7d3.jpg ",
                title: "Wholesome Dinner Bowl",
                content: "Brown rice, black beans, avocado, and cheese bowl.",
                healthImpactRange: 91,
              },
            ],
          },
        },
      ],
      workout: [
        {
          // Special Workout
          workoutTitle: "Osteoporosis",
          workoutDesc:
            "Exercise plays a vital role in managing Osteoporosis by strengthening bones, enhancing muscle mass, and improving balance, thereby reducing the risk of falls and fractures. Weight-bearing and resistance activities are particularly beneficial in maintaining bone density and supporting skeletal health in individuals with Osteoporosis.",

          workoutVideo:
            "https://res.cloudinary.com/dddyd5tyq/raw/upload/v1702027726/video/Osteoporosis",
            advice:"Embrace strength in every step you take, building a foundation of resilience and vitality for your bones and spirit.",
          workoutImage: "https://res.cloudinary.com/dddyd5tyq/image/upload/v1702149703/image-workoutPage/p2r2k2g8khj3rtno1ign.webp",
        },
      ],
    },
  },
  {
    // Condition details
    title: "Rheumatoid Arthritis",
    conditionDesc:
      "An autoimmune disorder that primarily affects joints, causing pain and stiffness.",
    image:
      "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701687339/healthcondition/rheumatoid.png",

    conditionChoose: {
      diet: [
        {
          // Special Diet
          healthCondition: "Rheumatoid Arthritis",
          description:
            "Emphasize anti-inflammatory foods rich in omega-3s, antioxidants, and fiber. Include fish, nuts, seeds, and colorful fruits and vegetables. Limit processed foods, excessive sugar, and saturated fats.",
          meals: {
            breakfast: [
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701721881/diet/8b1.jpg",
                title: "Anti-Inflammatory Smoothie",
                content: "Pineapple, ginger, turmeric, and chia seed smoothie.",
                healthImpactRange: 92,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701721926/diet/8b2.jpg ",
                title: "Omega Morning Bowl",
                content: "Overnight oats with flaxseeds, walnuts, and berries.",
                healthImpactRange: 90,
              },
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701722017/diet/8b3.jpg",
                title: "Joint-Healthy Toast",
                content:
                  "Whole grain toast with avocado and a sprinkle of sesame seeds.",
                healthImpactRange: 91,
              },
            ],
            lunch: [
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701722065/diet/8l1.jpg",
                title: "Soothing Salad",
                content:
                  "Spinach, cherry tomatoes, grilled salmon, and olive oil dressing.",
                healthImpactRange: 93,
              },
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701722128/diet/8l2.jpg",
                title: "Healing Soup",
                content:
                  "Chicken and vegetable soup with added ginger and garlic.",
                healthImpactRange: 89,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701722175/diet/8l3.jpg ",
                title: "Balanced Plate",
                content:
                  "Quinoa, steamed broccoli, and grilled chicken with herbs.",
                healthImpactRange: 90,
              },
            ],
            dinner: [
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701722217/diet/8d1.jpg",
                title: "Omega Boost",
                content:
                  "Grilled mackerel with asparagus and lemon herb dressing.",
                healthImpactRange: 94,
              },
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701722305/diet/8d2.jpg",
                title: "Antioxidant-Rich Stir-Fry",
                content:
                  "Shrimp and bell pepper stir-fry with a touch of sesame oil.",
                healthImpactRange: 90,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701722356/diet/8d3.jpg ",
                title: "Joint Care Platter",
                content:
                  "Beef steak (lean cut) with a side of roasted Brussels sprouts.",
                healthImpactRange: 91,
              },
            ],
          },
        },
      ],
      workout: [
        {
          // Special Workout
          workoutTitle: "Rheumatoid Arthritis",
          workoutDesc:
            "Regular exercise is essential in managing Rheumatoid Arthritis, as it helps maintain joint flexibility, reduce pain and stiffness, and strengthen the muscles that support the joints. Low-impact activities and range-of-motion exercises are particularly beneficial for improving functional ability and quality of life in individuals with Rheumatoid Arthritis.",

          workoutVideo:
            "https://res.cloudinary.com/dddyd5tyq/raw/upload/v1702027935/video/Rheumatoid",
            advice:"Embrace each day with resilience and grace, as you navigate your journey with strength and determination.",
          workoutImage: "https://res.cloudinary.com/dddyd5tyq/image/upload/v1702149733/image-workoutPage/rfdyemdlkvi6thu9lyve.webp",
        },
      ],
    },
  },
  {
    // Condition details
    title: "Osteoarthritis",
    conditionDesc:
      "A joint disorder causing cartilage breakdown, leading to pain and stiffness.",
    image:
      "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701687484/healthcondition/osteoarthritis.png",

    conditionChoose: {
      diet: [
        {
          // Special Diet
          healthCondition: "Osteoarthritis",
          description:
            "Emphasize foods rich in omega-3 fatty acids, antioxidants, and vitamins. Limit sugars, saturated fats, and refined carbohydrates.",
          meals: {
            breakfast: [
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701722719/diet/9b1.jpg ",
                title: "Joint Health Smoothie",
                content:
                  "Pineapple, spinach, and chia seeds blended with coconut water.",
                healthImpactRange: 91,
              },
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701722778/diet/9b2.jpg",
                title: "Morning Vitality Porridge",
                content:
                  "Oatmeal with walnuts, berries, and a drizzle of honey.",
                healthImpactRange: 89,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701722833/diet/9b3.jpg ",
                title: "Vitamin Boost Juice",
                content: "Freshly squeezed orange, carrot, and beet juice.",
                healthImpactRange: 90,
              },
            ],
            lunch: [
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701722896/diet/9l1.jpg",
                title: "Joint-Friendly Salad",
                content:
                  "Mixed greens, avocado, cherry tomatoes, grilled chicken, and almonds with a lemon-olive oil dressing.",
                healthImpactRange: 92,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701723012/diet/9l2.jpg ",
                title: "Bone Support Soup",
                content:
                  "Chicken bone broth with vegetables and a touch of turmeric.",
                healthImpactRange: 91,
              },
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701723062/diet/9l3.jpg",
                title: "Flexibility Wrap",
                content:
                  "Spinach wrap filled with tuna, celery, and a light mayo dressing.",
                healthImpactRange: 90,
              },
            ],
            dinner: [
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701723112/diet/9d1.jpg ",
                title: "Nutrient-Rich Plate",
                content: "Grilled sardines, brown rice, and sautéed kale.",
                healthImpactRange: 93,
              },
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701723173/diet/9d2.jpg",
                title: "Joint Care Stir-Fry",
                content:
                  "Shrimp, snow peas, and bell peppers in a light garlic sauce.",
                healthImpactRange: 92,
              },
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701723229/diet/9d3.jpg",
                title: "Omega Boost Dinner",
                content: "Baked salmon with a side of roasted sweet potatoes.",
                healthImpactRange: 91,
              },
            ],
          },
        },
      ],
      workout: [
        {
          // Special Workout
          workoutTitle: "Osteoarthritis",
          workoutDesc:
            "Exercise is key in managing Osteoarthritis, as it strengthens the muscles around the joints, improves flexibility, and reduces joint pain and stiffness. Engaging in low-impact activities like walking, swimming, or cycling can significantly enhance joint mobility and overall quality of life for individuals with Osteoarthritis.",

          workoutVideo:
            "https://res.cloudinary.com/dddyd5tyq/raw/upload/v1702028102/video/Osteoarthritis",
            advice:"Move forward with hope and determination, as every step you take is a stride towards mobility and a life full of possibilities.",
          workoutImage: "https://res.cloudinary.com/dddyd5tyq/image/upload/v1702149741/image-workoutPage/oaqboo3rcyokc7imnlrf.webp",
        },
      ],
    },
  },
  {
    // Condition details
    title: "COPD (Respiratory Disease)",
    conditionDesc:
      "A group of lung diseases that block airflow and make it difficult to breathe.",
    image:
      "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701692076/healthcondition/COPD.png",

    conditionChoose: {
      diet: [
        {
          // Special Diet
          healthCondition: "Chronic Obstructive Pulmonary Disease",
          description:
            "Focus on nutrient-dense foods that support lung health. Prioritize lean proteins, whole grains, and antioxidant-rich foods. Avoid processed foods, excessive salt, and deep-fried items.",
          meals: {
            breakfast: [
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701723434/diet/10b1.jpg",
                title: "Lung Health Smoothie",
                content:
                  "Blueberries, kale, banana, and almond milk blended together.",
                healthImpactRange: 90,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701723480/diet/10b2.jpg ",
                title: "Respiratory Boost Oatmeal",
                content:
                  "Steel-cut oats topped with mixed berries, honey, and a sprinkle of chia seeds.",
                healthImpactRange: 88,
              },
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701723537/diet/10b3.jpg",
                title: "Breathing Ease Muesli",
                content:
                  "Whole grain muesli mixed with dried fruits, nuts, and yogurt.",
                healthImpactRange: 89,
              },
            ],
            lunch: [
              {
                image: " ",
                title:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701723599/diet/10l1.jpgLung Support Salad",
                content:
                  "Mixed greens, cherry tomatoes, walnuts, grilled chicken, and avocado with a balsamic vinaigrette.",
                healthImpactRange: 91,
              },
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701723642/diet/10l2.jpg",
                title: "Oxygen Boost Soup",
                content:
                  "Vegetable broth with lentils, carrots, spinach, and a touch of thyme.",
                healthImpactRange: 90,
              },
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701723692/diet/10l3.jpg",
                title: "Breath Fresh Wrap",
                content:
                  "Whole grain wrap with hummus, roasted veggies, and turkey slices.",
                healthImpactRange: 89,
              },
            ],
            dinner: [
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701723786/diet/10d1.jpg ",
                title: "Clean Air Plate",
                content:
                  "Grilled tilapia, quinoa, and steamed broccoli with a side of lemon-garlic sauce.",
                healthImpactRange: 92,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701723840/diet/10d2.jpg ",
                title: "Lung Vitality Stir-Fry",
                content:
                  "Tofu, green beans, bell peppers, and almonds tossed in a light soy sauce.",
                healthImpactRange: 90,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701723895/diet/10d3.jpg ",
                title: "Respiratory Delight",
                content:
                  "Roasted chicken breast with a side of mashed sweet potatoes and green beans.",
                healthImpactRange: 91,
              },
            ],
          },
        },
      ],
      workout: [
        {
          // Special Workout
          workoutTitle: "Chronic Obstructive Pulmonary Disease",
          workoutDesc:
            "Regular exercise is crucial for individuals with COPD (Chronic Obstructive Pulmonary Disease), as it improves lung function, increases stamina, and enhances overall quality of life. Engaging in moderate-intensity aerobic activities and breathing exercises helps to manage symptoms and improve the ability to perform daily activities.",
          workoutVideo:
            "https://res.cloudinary.com/dddyd5tyq/raw/upload/v1702028193/video/copd",
            advice:"Breathe in courage and exhale strength, as you journey each day towards better respiratory health and quality of life.",
          workoutImage: "https://res.cloudinary.com/dddyd5tyq/image/upload/v1702149747/image-workoutPage/lcqzjvwb0wowmklfcezr.webp",
        },
      ],
    },
  },
  {
    // Condition details
    title: "Asthma",
    conditionDesc:
      "A respiratory condition marked by spasms in the bronchi of the lungs, causing difficulty in breathing.",
    image:
      "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701692451/healthcondition/asthma.png",

    conditionChoose: {
      diet: [
        {
          // Special Diet
          healthCondition: "Asthma",
          description:
            "Prioritize anti-inflammatory foods that may help reduce asthma symptoms. Consume omega-3 fatty acids, antioxidants, and magnesium-rich foods. Avoid potential allergens like dairy and gluten if sensitive.",
          meals: {
            breakfast: [
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701724441/diet/11b1.jpg ",
                title: "Anti-Inflammatory Smoothie Bowl",
                content:
                  "Spinach, chia seeds, flaxseeds, strawberries, and almond milk topped with coconut flakes and pumpkin seeds.",
                healthImpactRange: 92,
              },
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701724492/diet/11b2.jpg",
                title: "Omega-3 Rich Granola",
                content:
                  "Oats, walnuts, chia seeds, and dried apricots served with almond milk.",
                healthImpactRange: 91,
              },
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701724540/diet/11b3.jpg",
                title: "Magnesium Boost Pancakes",
                content:
                  "Buckwheat pancakes topped with blueberries, almonds, and a drizzle of honey.",
                healthImpactRange: 90,
              },
            ],
            lunch: [
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701724607/diet/11l1.jpg",
                title: "Breathing Easy Salad",
                content:
                  "Mixed greens, salmon, quinoa, avocado, and cherry tomatoes with an olive oil dressing.",
                healthImpactRange: 93,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701724656/diet/11l2.jpg ",
                title: "Asthma-Friendly Soup",
                content:
                  "Chicken broth with kale, beans, carrots, and celery. Seasoned with turmeric and black pepper.",
                healthImpactRange: 92,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701724721/diet/11l3.jpg ",
                title: "Anti-Allergen Wrap",
                content:
                  "Gluten-free wrap filled with grilled chicken, roasted veggies, and hummus.",
                healthImpactRange: 90,
              },
            ],
            dinner: [
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701785314/diet/bcmjzbcxlp6snhiqrntv.jpg ",
                title: "Easy-Breathing Plate",
                content:
                  "Grilled mackerel, wild rice, and steamed spinach drizzled with lemon juice.",
                healthImpactRange: 93,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701724855/diet/11d2.png ",
                title: "Lung Support Stir-Fry",
                content:
                  "Shrimp, broccoli, bell peppers, and snap peas cooked in a light ginger sauce.",
                healthImpactRange: 92,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701724930/diet/11d3.jpg ",
                title: "Asthma Alleviation Bowl",
                content:
                  "Brown rice, black beans, corn, avocado, and grilled tofu with a side of salsa.",
                healthImpactRange: 91,
              },
            ],
          },
        },
      ],
      workout: [
        {
          // Special Workout
          workoutTitle: "Asthma ",
          workoutDesc:
            "Exercise is important for managing asthma, as it improves lung capacity and endurance, helping to reduce the severity and frequency of asthma attacks. Controlled, low-intensity activities, combined with proper warm-up and cool-down exercises, can enhance overall respiratory health without triggering asthma symptoms.",
          workoutVideo:
            "https://res.cloudinary.com/dddyd5tyq/raw/upload/v1702028277/video/asthma",
            advice:"Embrace each breath with hope and strength, as you pave the way towards a life of wellness and unbounded potential.",
          workoutImage: "https://res.cloudinary.com/dddyd5tyq/image/upload/v1702149752/image-workoutPage/ck4k9pyqym6i0naoiaes.webp",
        },
      ],
    },
  },
  {
    // Condition details for Depression
    title: "Depression",
    conditionDesc:
      "A mental health disorder characterized by persistently depressed mood or loss of interest in activities, causing significant impairment in daily life.",
    image:
      "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701692607/healthcondition/depression.png",

    conditionChoose: {
      diet: [
        {
          // Special Diet
          healthCondition: "Depression",
          description:
            "Emphasize a balanced diet with mood-boosting nutrients. Include omega-3 fatty acids, tryptophan-rich foods, complex carbohydrates, and B vitamins. Reduce caffeine and processed sugar intake.",
          meals: {
            breakfast: [
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701725219/diet/12b1.jpg ",
                title: "Mood Boosting Oats",
                content:
                  "Oatmeal cooked with almond milk, topped with bananas, chia seeds, walnuts, and a drizzle of honey.",
                healthImpactRange: 91,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701725292/diet/12b2.jpg ",
                title: "Sunshine Smoothie",
                content:
                  "Blend of oranges, strawberries, Greek yogurt, and a pinch of turmeric.",
                healthImpactRange: 90,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701725344/diet/12b3.jpg ",
                title: "Positive Energy Toast",
                content:
                  "Whole-grain toast with avocado, cherry tomatoes, and sprinkled with sesame seeds.",
                healthImpactRange: 89,
              },
            ],
            lunch: [
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701725399/diet/12l1.jpg",
                title: "Serotonin Salad",
                content:
                  "Mixed greens, turkey breast, quinoa, sunflower seeds, and carrots with a lemon dressing.",
                healthImpactRange: 92,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701725531/diet/12l2.jpg ",
                title: "Brain Boosting Wrap",
                content:
                  "Spinach wrap filled with tuna, lettuce, cucumber, and bell peppers.",
                healthImpactRange: 91,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701725597/diet/12l3.jpg ",
                title: "Mindful Miso Soup",
                content:
                  "Miso soup with tofu, seaweed, green onions, and shiitake mushrooms.",
                healthImpactRange: 90,
              },
            ],
            dinner: [
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701725654/diet/12d1.jpg ",
                title: "Balanced Brain Plate",
                content:
                  "Grilled salmon, roasted sweet potatoes, and steamed asparagus.",
                healthImpactRange: 93,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701725714/diet/12d2.jpg ",
                title: "Happy Gut Stir-Fry",
                content:
                  "Chicken, broccoli, snap peas, and bell peppers cooked in a light soy sauce.",
                healthImpactRange: 92,
              },
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701725805/diet/12d3.jpg",
                title: "Tranquil Tofu Bowl",
                content:
                  "Quinoa, grilled tofu, kale, beets, and a tahini dressing.",
                healthImpactRange: 91,
              },
            ],
          },
        },
      ],
      workout: [
        {
          // Special Workout
          workoutTitle: "Depression",
          workoutDesc:
            "Regular exercise is highly beneficial for managing depression, as it releases endorphins and other natural brain chemicals that can enhance a sense of well-being. Physical activity also provides psychological benefits, such as increased self-esteem and social interaction, which are crucial in alleviating symptoms of depression.",
          workoutVideo:
            "https://res.cloudinary.com/dddyd5tyq/raw/upload/v1702028386/video/Depression",
            advice:"In every small moment of joy and every step forward, find the strength to embrace the light within you.",
          workoutImage: "https://res.cloudinary.com/dddyd5tyq/image/upload/v1702149756/image-workoutPage/fccy46pfufrptqbgq6da.webp",
        },
      ],
    },
  },
  {
    // Condition details
    title: "Anxiety",
    conditionDesc:
      "A mental health disorder characterized by excessive and persistent worry, nervousness, or fear about various aspects of daily life. These feelings are often difficult to control, out of proportion to the actual danger, and can last a long time. ",
    image:
      "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701693144/healthcondition/anxiety.png",
    conditionChoose: {
      diet: [
        {
          // Special Diet
          healthCondition: "Anxiety",
          description:
            "Prioritize foods rich in magnesium, zinc, and omega-3 fatty acids. Incorporate complex carbohydrates and ensure adequate intake of B vitamins. Limit caffeine and alcohol.",
          meals: {
            breakfast: [
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701726042/diet/13b1.jpg ",
                title: "Calm Start Cereal",
                content:
                  "Whole grain cereal with blueberries, flaxseeds, and almond milk.",
                healthImpactRange: 90,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701726109/diet/13b2.jpg ",
                title: "Peaceful Protein Pancakes",
                content:
                  "Pancakes made with whole wheat, topped with Greek yogurt, almonds, and a splash of maple syrup.",
                healthImpactRange: 89,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701726153/diet/13b3.jpg ",
                title: "Zen Zone Smoothie",
                content:
                  "Blend of spinach, kiwi, chia seeds, and coconut water.",
                healthImpactRange: 88,
              },
            ],
            lunch: [
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701726216/diet/13l1.jpg",
                title: "Soothing Salad Bowl",
                content:
                  "Spinach, chickpeas, pumpkin seeds, cherry tomatoes, and avocado with olive oil dressing.",
                healthImpactRange: 92,
              },
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701726268/diet/13l2.jpg",
                title: "Relaxing Rice Plate",
                content:
                  "Brown rice, steamed broccoli, sautéed tempeh, and a sprinkle of sesame seeds.",
                healthImpactRange: 91,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701726317/diet/13l3.jpg ",
                title: "Mindful Mushroom Soup",
                content:
                  "Creamy mushroom soup with barley, thyme, and a touch of cream.",
                healthImpactRange: 89,
              },
            ],
            dinner: [
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701726399/diet/13d1.jpg ",
                title: "Tranquility Tuna Steak",
                content:
                  "Grilled tuna steak, quinoa salad with bell peppers, and a side of sautéed spinach.",
                healthImpactRange: 94,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701726449/diet/13d2.jpg ",
                title: "Serenity Stuffed Peppers",
                content:
                  "Bell peppers filled with a mix of ground turkey, tomatoes, black beans, and corn.",
                healthImpactRange: 93,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701726502/diet/13d3.jpg ",
                title: "Ease Evening Eggplant Curry",
                content:
                  "Eggplant and chickpea curry served with basmati rice.",
                healthImpactRange: 92,
              },
            ],
          },
        },
      ],
      workout: [
        {
          // Special Workout
          workoutTitle: "Anxiety Relief",
          workoutDesc:
            "Exercise plays a significant role in managing anxiety by promoting the release of endorphins, which are natural mood lifters, and by reducing levels of the body's stress hormones. Regular physical activity can also serve as a distraction, helping to break the cycle of negative thoughts that feed anxiety.",
          workoutVideo:
            "https://res.cloudinary.com/dddyd5tyq/raw/upload/v1702028492/video/anxiety",
            advice:"Embrace each day with courage and calm, as you navigate the waves of life with resilience and inner peace.",
          workoutImage: "https://res.cloudinary.com/dddyd5tyq/image/upload/v1702149760/image-workoutPage/qrhxuuq0swluzbl1fukb.webp",
        },
      ],
    },
  },
  {
    // Condition details
    title: "Cognitive Decline",
    conditionDesc:
      "A gradual reduction in cognitive abilities, including memory and thinking skills, often associated with aging or neurological conditions.",
    image:
      "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701693271/healthcondition/cognitive.png",
    conditionChoose: {
      diet: [
        {
          // Special Diet
          healthCondition: "Cognitive Decline",
          description:
            "Focus on foods that boost brain health like omega-3 fatty acids, antioxidants, and vitamin E. Limit saturated fats and sugars. The Mediterranean diet has been shown to be beneficial.",
          meals: {
            breakfast: [
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701726601/diet/14b1.jpg ",
                title: "Brainy Berry Bowl",
                content:
                  "Greek yogurt topped with walnuts, dark chocolate chunks, and mixed berries (blueberries, strawberries, raspberries).",
                healthImpactRange: 92,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701726685/diet/14b2.jpg ",
                title: "Memory-Boost Muffin",
                content:
                  "Bran muffins with shredded carrots, zucchini, and a sprinkle of chia seeds.",
                healthImpactRange: 91,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701726734/diet/14b3.jpg ",
                title: "Neuro Nutty Oats",
                content:
                  "Oatmeal made with almond milk, topped with a mix of nuts (almonds, hazelnuts), and a drizzle of honey.",
                healthImpactRange: 89,
              },
            ],
            lunch: [
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701726792/diet/14l1.jpg",
                title: "Cognitive Kale Salad",
                content:
                  "Kale, roasted beets, quinoa, feta cheese, and walnuts with a light vinaigrette.",
                healthImpactRange: 93,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701726870/diet/14l2.jpg ",
                title: "Brain-Protective Pita Pocket",
                content:
                  "Whole grain pita filled with hummus, sliced avocado, sprouts, and cherry tomatoes.",
                healthImpactRange: 91,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701726929/diet/14l3.jpg ",
                title: "Mental Might Minestrone",
                content:
                  "Minestrone soup with beans, whole grain pasta, and an assortment of veggies.",
                healthImpactRange: 90,
              },
            ],
            dinner: [
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701726993/diet/14d1.jpg ",
                title: "Neural Nourishing Salmon",
                content:
                  "Grilled salmon fillet, steamed asparagus, and quinoa pilaf with sautéed mushrooms.",
                healthImpactRange: 95,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701727048/diet/14d2.jpg ",
                title: "Synapse-Strengthening Stir Fry",
                content:
                  "Tofu stir fry with broccoli, bell peppers, snow peas, and a touch of sesame oil, served over brown rice",
                healthImpactRange: 93,
              },
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701727104/diet/14d3.jpg",
                title: "Brain-Boosting Broccoli Pasta",
                content:
                  "Whole grain spaghetti with a creamy broccoli and walnut sauce.",
                healthImpactRange: 92,
              },
            ],
          },
        },
      ],
      workout: [
        {
          // Special Workout
          workoutTitle: "Cognitive Decline (Mental Health)",
          workoutDesc:
            "Regular exercise is beneficial in slowing cognitive decline, as it enhances blood flow to the brain, supporting neuron health and cognitive functions. Physical activities, particularly aerobic exercises, can improve memory, attention, and the overall mental processing speed in individuals experiencing cognitive decline.",
          workoutVideo:
            "https://res.cloudinary.com/dddyd5tyq/raw/upload/v1702028962/video/cognitive",
            advice:"Cherish every memory and moment, as you continue to weave the rich tapestry of your life's story with wisdom and grace.",
          workoutImage: "https://res.cloudinary.com/dddyd5tyq/image/upload/v1702149765/image-workoutPage/w6loqjyz4k2lvdxusoke.webp",
        },
      ],
    },
  },
  {
    // Condition details
    title: "Non-Alcoholic Fatty Liver ",
    conditionDesc:
      "A liver condition characterized by the accumulation of fat in liver cells, not caused by excessive alcohol consumption, potentially leading to liver inflammation and damage.",
    image:
      "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701693634/healthcondition/liver.png",
    conditionChoose: {
      diet: [
        {
          // Special Diet
          healthCondition: "Non-Alcoholic Fatty Liver Disease",
          description:
            " Focus on a balanced diet with plenty of fruits, vegetables, whole grains, and healthy fats. Reduce intake of saturated fats, sugars, and refined carbohydrates. Maintain a healthy weight and monitor calorie intake.",
          meals: {
            breakfast: [
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701727212/diet/15b1.jpg",
                title: "Liver-Loving Oats",
                content:
                  "Steel-cut oats topped with sliced bananas, chia seeds, and a dollop of almond butter.",
                healthImpactRange: 90,
              },
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701727260/diet/15b2.jpg",
                title: "Detox Delight Smoothie",
                content:
                  "Spinach, apple, ginger, lemon, and a touch of honey blended with unsweetened almond milk.",
                healthImpactRange: 89,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701727331/diet/15b3.jpg ",
                title: "Hepatic Health Muffins",
                content:
                  " Whole grain muffins with walnuts, flaxseeds, and blueberries.",
                healthImpactRange: 88,
              },
            ],
            lunch: [
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701727381/diet/15l1.jpg",
                title: "Liver-Care Lentil Soup",
                content:
                  "Lentil soup with carrots, celery, onions, and a sprinkle of turmeric.",
                healthImpactRange: 92,
              },
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701727464/diet/15l2.jpg",
                title: "Cleanse & Care Salad",
                content:
                  "Mixed greens, cherry tomatoes, cucumber, olive oil, and a sprinkle of lemon zest.",
                healthImpactRange: 91,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701727528/diet/15l3.jpg ",
                title: "Fatty Liver Fix Wrap",
                content:
                  "Whole grain wrap with grilled chicken, mixed veggies, hummus, and a drizzle of olive oil.",
                healthImpactRange: 90,
              },
            ],
            dinner: [
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701727581/diet/15d1.jpg",
                title: "Liver-Boost Broiled Fish",
                content:
                  " Broiled white fish with a side of steamed broccoli and quinoa.",
                healthImpactRange: 93,
              },
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701727632/diet/15d2.jpg",
                title: "NAFLD Nourishing Stew",
                content:
                  "Vegetable stew with beans, zucchini, bell peppers, and tomatoes.",
                healthImpactRange: 91,
              },
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701727678/diet/15d3.jpg",
                title: "Hepatic Harmony Veggie Bowl",
                content:
                  " Brown rice bowl topped with roasted veggies, tofu, and a tahini dressing.",
                healthImpactRange: 90,
              },
            ],
          },
        },
      ],
      workout: [
        {
          // Special Workout
          workoutTitle: "Non-Alcoholic Fatty Liver Disease (NAFLD)",
          workoutDesc:
            "Exercise is crucial in managing Non-Alcoholic Fatty Liver Disease (NAFLD) as it helps reduce liver fat, improve insulin sensitivity, and aid in weight management. Regular physical activity, especially aerobic exercises, can significantly lower the progression of NAFLD and improve liver health.",
          workoutVideo:
            "https://res.cloudinary.com/dddyd5tyq/raw/upload/v1702029329/video/non",
            advice:"Embrace your journey to wellness, where every healthy choice is a step towards a revitalized liver and a vibrant life.",
          workoutImage: "https://res.cloudinary.com/dddyd5tyq/image/upload/v1702149771/image-workoutPage/mtrvvurbr4mjrds61edo.webp",
        },
      ],
    },
  },
  {
    // Condition details
    title: "Polycystic Ovary Syndrome",
    conditionDesc:
      "A hormonal disorder common among women of reproductive age, characterized by irregular menstrual periods, excess androgen levels, and polycystic ovaries.",
    image:
      "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701694433/healthcondition/polycystic.png",
    conditionChoose: {
      diet: [
        {
          // Special Diet
          healthCondition: "Polycystic Ovary Syndrome",
          description:
            " Prioritize a balanced diet with a focus on high-fiber foods, lean proteins, and anti-inflammatory foods. Limit refined carbohydrates, sugary foods, and drinks.",
          meals: {
            breakfast: [
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701727764/diet/16b1.jpg ",
                title: "Balanced Hormone Bowl",
                content:
                  "Greek yogurt topped with a mix of nuts, seeds, and dark berries.",
                healthImpactRange: 91,
              },
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701727819/diet/16b2.jpg ",
                title: "PCOS-Power Smoothie",
                content:
                  "Kale, avocado, chia seeds, and almond milk blended together.",
                healthImpactRange: 89,
              },
              {
                image:
                  "  https://res.cloudinary.com/dddyd5tyq/image/upload/v1701727942/diet/16b3.jpg",
                title: " Regulating Oats Parfait",
                content: "Layered oats, almond butter, kiwi, and walnuts.",
                healthImpactRange: 88,
              },
            ],
            lunch: [
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701728036/diet/16l1.jpg ",
                title: "Fertility-Boost Salad",
                content:
                  "Spinach, roasted chickpeas, avocado, and pumpkin seeds with a light vinaigrette.",
                healthImpactRange: 92,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701728091/diet/16l2.jpg",
                title: "Anti-Inflammation Avocado Toast",
                content:
                  "Whole grain toast, mashed avocado, cherry tomatoes, and a sprinkle of flaxseeds.",
                healthImpactRange: 90,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701728209/diet/16l3.jpg",
                title: "Cycle-Care Chickpea Bowl",
                content:
                  "Chickpeas, quinoa, mixed veggies, and a tahini-lemon dressing.",
                healthImpactRange: 89,
              },
            ],
            dinner: [
              {
                image:
                  " https://res.cloudinary.com/dddyd5tyq/image/upload/v1701728258/diet/16d1.jpg",
                title: "Balancing Broiled Salmon",
                content:
                  "Broiled salmon with a side of sautéed kale and roasted sweet potatoes.",
                healthImpactRange: 94,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701728321/diet/16d2.jpg ",
                title: " Harmony-Inducing Herb Chicken",
                content:
                  " Herb-marinated grilled chicken, steamed green beans, and mashed cauliflower.",
                healthImpactRange: 92,
              },
              {
                image:
                  "https://res.cloudinary.com/dddyd5tyq/image/upload/v1701728377/diet/16d3.jpg ",
                title: "Soothing Veggie Stir-Fry",
                content:
                  "Tofu stir-fry with bell peppers, snow peas, and broccoli served over brown rice.",
                healthImpactRange: 91,
              },
            ],
          },
        },
      ],
      workout: [
        {
          // Special Workout
          workoutTitle: "Polycystic Ovary Syndrome (PCOS)",
          workoutDesc:
            "Regular exercise is vital for managing Polycystic Ovary Syndrome (PCOS), as it helps regulate insulin levels, improve hormonal balance, and aid in weight management. Engaging in a mix of aerobic and resistance training can also alleviate symptoms like irregular periods and excess hair growth, improving overall reproductive health.",

          workoutVideo:
            "https://res.cloudinary.com/dddyd5tyq/raw/upload/v1702029427/video/polycistic",
            advice:"Embrace your unique journey with strength and positivity, as each step you take leads to balance and empowerment in your health and life.",
          workoutImage: "https://res.cloudinary.com/dddyd5tyq/image/upload/v1702149812/image-workoutPage/c2rsdb7comiu11qq5lmo.webp",
        },
      ],
    },
  },
];
export default healthConditionsData;
