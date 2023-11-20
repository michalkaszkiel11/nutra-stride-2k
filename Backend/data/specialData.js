import mongoose from "mongoose";
import SpecialDiet from "../models/specialUser/specialDiet";
import SpecialWorkout from "../models/specialUser/specialWorkoutModel.js";
import Condition from "../models/specialUser/ConditionModel.js";

mongoose
    .connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => {
        console.log("Database connected! 😃");
    })
    .catch((error) => {
        console.log(error.message);
        console.log("🤨");
    });

//create a array of objects where each object is a specific health condition with diet and workout

const healthConditionsData = [
    {
        // Condition details
        title: "Hypertension (Cardiovascular Diseases)",
        conditionDesc:
            "A condition characterized by high blood pressure, requiring dietary regulation and exercise.",
        image: "url-to-hypertension-image",

        conditionChoose: {
            diet: [
                {
                    healthCondition: "Hypertension (Cardiovascular Diseases)",
                    description:
                        "Focus on low-sodium foods, rich in potassium, magnesium, and calcium. Emphasize whole grains, lean proteins, and healthy fats. Avoid excessive salt and processed foods.",
                    meals: {
                        breakfast: [
                            {
                                title: "Potassium Punch Smoothie",
                                content: "Banana and chia seed smoothie.",
                                healthImpactRange: 92,
                            },
                            {
                                title: "Wholesome Grain Bowl",
                                content: "Oatmeal with fresh berries and nuts.",
                                healthImpactRange: 90,
                            },
                            {
                                title: "Omega Morning Muffin",
                                content:
                                    "Walnut and blueberry muffin (whole grain).",
                                healthImpactRange: 88,
                            },
                        ],
                        lunch: [
                            {
                                title: "Heart-Healthy Salad",
                                content:
                                    "Spinach and kidney bean salad with a light vinaigrette.",
                                healthImpactRange: 91,
                            },
                            {
                                title: "Quinoa Veggie Delight",
                                content:
                                    "Quinoa salad with grilled vegetables and lemon dressing.",
                                healthImpactRange: 91,
                            },
                            {
                                title: "Tuna Greens Sandwich",
                                content:
                                    "Tuna sandwich on whole grain bread with mixed greens.",
                                healthImpactRange: 89,
                            },
                        ],
                        dinner: [
                            {
                                title: "Mackerel & Roots",
                                content:
                                    "Grilled mackerel with roasted sweet potatoes.",
                                healthImpactRange: 93,
                            },
                            {
                                title: "Lean Poultry Platter",
                                content:
                                    "Steamed chicken with herbs and steamed broccoli.",
                                healthImpactRange: 89,
                            },
                            {
                                title: "Salmon Omega Feast",
                                content:
                                    "Baked salmon with green beans and almonds.",
                                healthImpactRange: 92,
                            },
                        ],
                    },
                },
            ],

            workout: [
                {
                    workoutTitle: "Hypertension Workout Plan",
                    workoutDesc:
                        "A series of exercises suitable for individuals with hypertension, focusing on cardiovascular health.",
                    workoutVideo: "url-to-hypertension-workout-video",
                    workoutImage: "url-to-hypertension-workout-image",
                },
            ],
        },
    },
    {
        // Condition details
        title: "Coronary Artery Disease (Cardiovascular Diseases)",
        conditionDesc:
            "A heart condition that involves narrowed or blocked coronary arteries.",
        image: "url-to-coronary-artery-disease-image",

        conditionChoose: {
            diet: [
                {
                    // Special Diet
                    healthCondition:
                        "Coronary Artery Disease (Cardiovascular Diseases)",
                    description:
                        "Prioritize heart-healthy fats, especially omega-3s. Increase fiber intake through whole grains, fruits, and vegetables. Limit saturated fats, trans fats, and cholesterol.",
                    meals: {
                        breakfast: [
                            {
                                title: "Flaxseed Fiber Boost",
                                content:
                                    "Greek yogurt with flaxseeds and strawberries.",
                                healthImpactRange: 91,
                            },
                            {
                                title: "Berry Nutty Morning",
                                content:
                                    "Bran flakes with almond milk and a handful of almonds.",
                                healthImpactRange: 88,
                            },
                            {
                                title: "Heart-Healthy Oats",
                                content:
                                    "Oatmeal with walnuts and dried fruits.",
                                healthImpactRange: 90,
                            },
                        ],
                        lunch: [
                            {
                                title: "Omega Salad",
                                content:
                                    "Sardine salad with mixed greens and olive oil dressing.",
                                healthImpactRange: 89,
                            },
                            {
                                title: "Lean Protein Plate",
                                content: "Grilled turkey with a side salad.",
                                healthImpactRange: 90,
                            },
                            {
                                title: "Veggie Boost Bowl",
                                content:
                                    "Chickpea and vegetable stir-fry over brown rice.",
                                healthImpactRange: 88,
                            },
                        ],
                        dinner: [
                            {
                                title: "Mediterranean Delight",
                                content:
                                    "Grilled trout with sautéed spinach in garlic and olive oil.",
                                healthImpactRange: 92,
                            },
                            {
                                title: "Lean & Green",
                                content:
                                    "Chicken stir-fry with bell peppers and snow peas.",
                                healthImpactRange: 89,
                            },
                            {
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
                    workoutTitle: "Coronary Artery Disease Workout Plan",
                    workoutDesc:
                        "Improves heart health and reduces artery-clogging.",
                    workoutVideo:
                        "url-to-coronary-artery-disease-workout-video",
                    workoutImage:
                        "url-to-coronary-artery-disease-workout-image",
                },
            ],
        },
    },
    {
        // Condition details
        title: "Peripheral Vascular Disease (Cardiovascular Diseases)",
        conditionDesc:
            "A condition affecting blood circulation, necessitating dietary and exercise modifications.",
        image: "url-to-peripheral-vascular-disease-image",

        conditionChoose: {
            diet: [
                {
                    // Special Diet
                    healthCondition:
                        "Peripheral Vascular Disease (Cardiovascular Diseases)",
                    description:
                        "Emphasize foods that improve circulation and reduce inflammation. Focus on omega-3 fatty acids, antioxidants, and vitamin E. Limit saturated and trans fats.",
                    meals: {
                        breakfast: [
                            {
                                title: "Circulation Smoothie",
                                content: "Spinach, kiwi, and almond smoothie.",
                                healthImpactRange: 92,
                            },
                            {
                                title: "Antioxidant Acai Bowl",
                                content:
                                    "Acai bowl topped with granola, blueberries, and chia seeds.",
                                healthImpactRange: 90,
                            },
                            {
                                title: "Omega Morning Toast",
                                content:
                                    "Whole grain toast with avocado and a sprinkle of chia seeds.",
                                healthImpactRange: 91,
                            },
                        ],
                        lunch: [
                            {
                                title: "Heart & Vessel Salad",
                                content:
                                    "Kale and beet salad with walnuts and feta cheese.",
                                healthImpactRange: 89,
                            },
                            {
                                title: "Lean Lunch Wrap",
                                content:
                                    "Whole grain wrap with grilled chicken, spinach, and hummus.",
                                healthImpactRange: 88,
                            },
                            {
                                title: "Vitamin E Veggie Stir-Fry",
                                content:
                                    "Broccoli, bell pepper, and almond stir-fry with a touch of sesame oil.",
                                healthImpactRange: 89,
                            },
                        ],
                        dinner: [
                            {
                                title: "Circulation Seafood Platter",
                                content:
                                    "Grilled mackerel with roasted Brussels sprouts.",
                                healthImpactRange: 92,
                            },
                            {
                                title: "Turmeric Tofu Bowl",
                                content:
                                    "Tofu stir-fry with turmeric, broccoli, and brown rice.",
                                healthImpactRange: 90,
                            },
                            {
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
                    workoutTitle: "Peripheral Vascular Disease Workout Plan",
                    workoutDesc: "Improves circulation and reduces symptoms.",
                    workoutVideo:
                        "url-to-peripheral-vascular-disease-workout-video",
                    workoutImage:
                        "url-to-peripheral-vascular-disease-workout-image",
                },
            ],
        },
    },
    {
        // Condition details for Type 2 Diabetes
        title: "Type 2 Diabetes (Metabolic Disorders)",
        conditionDesc:
            "A metabolic disorder characterized by high blood sugar, insulin resistance, and relative lack of insulin.",
        image: "url-to-type-2-diabetes-image",

        conditionChoose: {
            diet: [
                {
                    // Special Diet
                    healthCondition: "Type 2 Diabetes (Metabolic Disorders)",
                    description:
                        "Focus on low-glycemic foods that help stabilize blood sugar levels. Prioritize whole grains, lean proteins, and healthy fats. Limit refined carbohydrates and added sugars.",
                    meals: {
                        breakfast: [
                            {
                                title: "Steady Sugar Smoothie",
                                content:
                                    "Blueberry, spinach, and chia seed smoothie with almond milk.",
                                healthImpactRange: 92,
                            },
                            {
                                title: "Whole Grain Start",
                                content:
                                    "Quinoa porridge topped with nuts, seeds, and a dash of cinnamon.",
                                healthImpactRange: 90,
                            },
                            {
                                title: "Balanced Breakfast Bowl",
                                content:
                                    "Greek yogurt with walnuts, berries, and a sprinkle of flaxseeds.",
                                healthImpactRange: 91,
                            },
                        ],
                        lunch: [
                            {
                                title: "Lean Lunch Plate",
                                content:
                                    "Grilled chicken salad with mixed greens, avocado, and vinaigrette.",
                                healthImpactRange: 90,
                            },
                            {
                                title: "Glycemic Guard Soup",
                                content:
                                    "Lentil and vegetable soup with a side of whole grain bread.",
                                healthImpactRange: 89,
                            },
                            {
                                title: "Stable Sugar Stir-Fry",
                                content:
                                    "Beef and broccoli stir-fry served over cauliflower rice.",
                                healthImpactRange: 88,
                            },
                        ],
                        dinner: [
                            {
                                title: "Diabetic Delight Pasta",
                                content:
                                    "Whole grain spaghetti with tomato basil sauce and grilled vegetables.",
                                healthImpactRange: 87,
                            },
                            {
                                title: "Balanced Blood Sugar Bowl",
                                content:
                                    "Salmon fillet over a bed of mixed grains, steamed asparagus, and a lemon herb dressing.",
                                healthImpactRange: 89,
                            },
                            {
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
                    workoutTitle: "Type 2 Diabetes Workout Plan",
                    workoutDesc:
                        "Improves insulin sensitivity and helps in blood sugar control.",
                    workoutVideo: "url-to-type-2-diabetes-workout-video",
                    workoutImage: "url-to-type-2-diabetes-workout-image",
                },
            ],
        },
    },
    {
        // Condition details
        title: "Metabolic Syndrome (Metabolic Disorders)",
        conditionDesc:
            "A cluster of conditions that increase the risk of heart disease, stroke, and type 2 diabetes.",
        image: "url-to-metabolic-syndrome-image",

        conditionChoose: {
            diet: [
                {
                    // Special Diet
                    healthCondition: "Metabolic Syndrome (Metabolic Disorders)",
                    description:
                        "Emphasize nutrient-dense, whole foods. Increase intake of fiber, lean proteins, and omega-3s. Limit processed foods, saturated fats, and added sugars.",
                    meals: {
                        breakfast: [
                            {
                                title: "Metabolic Boost Muffin",
                                content:
                                    "Bran muffin with apple slices and a dollop of almond butter.",
                                healthImpactRange: 88,
                            },
                            {
                                title: "Energizing Oats",
                                content:
                                    "Steel-cut oatmeal topped with mixed berries and sunflower seeds.",
                                healthImpactRange: 90,
                            },
                            {
                                title: "Protein Power Smoothie",
                                content:
                                    "Spinach, Greek yogurt, and flaxseed smoothie with a touch of honey.",
                                healthImpactRange: 89,
                            },
                        ],
                        lunch: [
                            {
                                title: "Heart-Healthy Salad",
                                content:
                                    "Mixed greens, tuna, olives, cherry tomatoes, and a light olive oil dressing.",
                                healthImpactRange: 91,
                            },
                            {
                                title: "Lean & Clean Stir-Fry",
                                content:
                                    "Shrimp and vegetable stir-fry with ginger, garlic, and a touch of soy sauce.",
                                healthImpactRange: 89,
                            },
                            {
                                title: "Wholesome Whole Grains",
                                content:
                                    "Brown rice bowl with black beans, salsa, avocado, and grilled chicken strips.",
                                healthImpactRange: 88,
                            },
                        ],
                        dinner: [
                            {
                                title: "Metabolic Boost Plate",
                                content:
                                    "Grilled trout with a side of roasted Brussels sprouts and quinoa.",
                                healthImpactRange: 92,
                            },
                            {
                                title: "Balanced Dinner Bowl",
                                content:
                                    "Chickpea curry with mixed vegetables served over brown rice.",
                                healthImpactRange: 89,
                            },
                            {
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
                    workoutTitle: "Metabolic Syndrome Workout Plan",
                    workoutDesc:
                        "Reduces the risk factors associated with metabolic syndrome.",
                    workoutVideo: "url-to-metabolic-syndrome-workout-video",
                    workoutImage: "url-to-metabolic-syndrome-workout-image",
                },
            ],
        },
    },
    {
        // Condition details
        title: "Obesity (Metabolic Disorders)",
        conditionDesc:
            "A metabolic condition characterized by excessive body fat that increases the risk of health problems.",
        image: "url-to-obesity-image",

        conditionChoose: {
            diet: [
                {
                    // Special Diet
                    healthCondition: "Obesity (Metabolic Disorders)",
                    description:
                        "Focus on calorie-controlled meals rich in whole foods. Prioritize vegetables, lean proteins, and whole grains. Limit sugary drinks, processed foods, and excessive fats.",
                    meals: {
                        breakfast: [
                            {
                                title: "Lean Green Smoothie",
                                content:
                                    "Spinach, cucumber, celery, and apple smoothie.",
                                healthImpactRange: 93,
                            },
                            {
                                title: "Protein-Packed Porridge",
                                content:
                                    "Oatmeal with almonds, chia seeds, and a touch of honey.",
                                healthImpactRange: 91,
                            },
                            {
                                title: "Fiber-Full Fruit Bowl",
                                content:
                                    "Mixed fruit salad with a sprinkle of flaxseeds.",
                                healthImpactRange: 92,
                            },
                        ],
                        lunch: [
                            {
                                title: "Vibrant Veggie Salad",
                                content:
                                    "Kale, cherry tomatoes, carrot, cucumber, and grilled chicken with lemon vinaigrette.",
                                healthImpactRange: 90,
                            },
                            {
                                title: "Hearty Healthy Soup",
                                content: "Vegetable and lentil soup.",
                                healthImpactRange: 88,
                            },
                            {
                                title: "Lean Lunch Wrap",
                                content:
                                    "Whole grain wrap filled with turkey slices, lettuce, and tomato.",
                                healthImpactRange: 87,
                            },
                        ],
                        dinner: [
                            {
                                title: "Balanced Plate",
                                content:
                                    "Steamed fish fillet, quinoa, and roasted asparagus.",
                                healthImpactRange: 93,
                            },
                            {
                                title: "Wholesome Whole Grains",
                                content:
                                    "Brown rice and vegetable stir-fry with tofu.",
                                healthImpactRange: 89,
                            },
                            {
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
                    workoutTitle: "Obesity Workout Plan",
                    workoutDesc:
                        "Assists in weight management when combined with a healthy diet.",
                    workoutVideo: "url-to-obesity-workout-video",
                    workoutImage: "url-to-obesity-workout-image",
                },
            ],
        },
    },
    {
        // Condition details
        title: "Osteoporosis (Musculoskeletal Disorders)",
        conditionDesc:
            "A bone condition that leads to an increased risk of fractures.",
        image: "url-to-osteoporosis-image",

        conditionChoose: {
            diet: [
                {
                    // Special Diet
                    healthCondition: "Osteoporosis (Musculoskeletal Disorders)",
                    description:
                        "Emphasize calcium and vitamin D-rich foods. Include leafy greens, dairy or fortified alternatives, and fish. Limit excessive sodium and caffeine.",
                    meals: {
                        breakfast: [
                            {
                                title: "Bone Boost Smoothie",
                                content:
                                    "Spinach, almond milk (fortified with calcium), and chia seeds smoothie.",
                                healthImpactRange: 92,
                            },
                            {
                                title: "Calcium Kickstart",
                                content: "Greek yogurt with almonds and honey.",
                                healthImpactRange: 90,
                            },
                            {
                                title: "Morning Sunlight Bowl",
                                content:
                                    "Scrambled eggs with mushrooms and cheese.",
                                healthImpactRange: 91,
                            },
                        ],
                        lunch: [
                            {
                                title: "Strong Bones Salad",
                                content:
                                    "Sardines, mixed greens, cherry tomatoes, and feta cheese with olive oil dressing.",
                                healthImpactRange: 92,
                            },
                            {
                                title: "Mineral Rich Soup",
                                content:
                                    "Spinach and lentil soup with a touch of cream.",
                                healthImpactRange: 89,
                            },
                            {
                                title: "Protein & Calcium Wrap",
                                content:
                                    "Whole grain wrap filled with hummus, lettuce, and grilled chicken.",
                                healthImpactRange: 88,
                            },
                        ],
                        dinner: [
                            {
                                title: "Bone Health Plate",
                                content:
                                    "Grilled salmon, quinoa, and steamed broccoli.",
                                healthImpactRange: 94,
                            },
                            {
                                title: "Nutrient-Dense Stir-Fry",
                                content:
                                    "Tofu and vegetable stir-fry with sesame seeds.",
                                healthImpactRange: 90,
                            },
                            {
                                title: "Wholesome Dinner Bowl",
                                content:
                                    "Brown rice, black beans, avocado, and cheese bowl.",
                                healthImpactRange: 91,
                            },
                        ],
                    },
                },
            ],
            workout: [
                {
                    // Special Workout
                    workoutTitle: "Osteoporosis Workout Plan",
                    workoutDesc: "Increases bone density and strength.",
                    workoutVideo: "url-to-osteoporosis-workout-video",
                    workoutImage: "url-to-osteoporosis-workout-image",
                },
            ],
        },
    },
    {
        // Condition details
        title: "Rheumatoid Arthritis (Musculoskeletal Disorders)",
        conditionDesc:
            "An autoimmune disorder that primarily affects joints, causing pain and stiffness.",
        image: "url-to-rheumatoid-arthritis-image",

        conditionChoose: {
            diet: [
                {
                    // Special Diet
                    healthCondition:
                        "Rheumatoid Arthritis (Musculoskeletal Disorders)",
                    description:
                        "Emphasize anti-inflammatory foods rich in omega-3s, antioxidants, and fiber. Include fish, nuts, seeds, and colorful fruits and vegetables. Limit processed foods, excessive sugar, and saturated fats.",
                    meals: {
                        breakfast: [
                            {
                                title: "Anti-Inflammatory Smoothie",
                                content:
                                    "Pineapple, ginger, turmeric, and chia seed smoothie.",
                                healthImpactRange: 92,
                            },
                            {
                                title: "Omega Morning Bowl",
                                content:
                                    "Overnight oats with flaxseeds, walnuts, and berries.",
                                healthImpactRange: 90,
                            },
                            {
                                title: "Joint-Healthy Toast",
                                content:
                                    "Whole grain toast with avocado and a sprinkle of sesame seeds.",
                                healthImpactRange: 91,
                            },
                        ],
                        lunch: [
                            {
                                title: "Soothing Salad",
                                content:
                                    "Spinach, cherry tomatoes, grilled salmon, and olive oil dressing.",
                                healthImpactRange: 93,
                            },
                            {
                                title: "Healing Soup",
                                content:
                                    "Chicken and vegetable soup with added ginger and garlic.",
                                healthImpactRange: 89,
                            },
                            {
                                title: "Balanced Plate",
                                content:
                                    "Quinoa, steamed broccoli, and grilled chicken with herbs.",
                                healthImpactRange: 90,
                            },
                        ],
                        dinner: [
                            {
                                title: "Omega Boost",
                                content:
                                    "Grilled mackerel with asparagus and lemon herb dressing.",
                                healthImpactRange: 94,
                            },
                            {
                                title: "Antioxidant-Rich Stir-Fry",
                                content:
                                    "Shrimp and bell pepper stir-fry with a touch of sesame oil.",
                                healthImpactRange: 90,
                            },
                            {
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
                    workoutTitle: "Rheumatoid Arthritis Workout Plan",
                    workoutDesc: "Reduces joint pain and stiffness.",
                    workoutVideo: "url-to-rheumatoid-arthritis-workout-video",
                    workoutImage: "url-to-rheumatoid-arthritis-workout-image",
                },
            ],
        },
    },
    {
        // Condition details
        title: "Osteoarthritis (Musculoskeletal Disorders)",
        conditionDesc:
            "A joint disorder causing cartilage breakdown, leading to pain and stiffness.",
        image: "url-to-osteoarthritis-image",

        conditionChoose: {
            diet: [
                {
                    // Special Diet
                    healthCondition:
                        "Osteoarthritis (Musculoskeletal Disorders)",
                    description:
                        "Emphasize foods rich in omega-3 fatty acids, antioxidants, and vitamins. Limit sugars, saturated fats, and refined carbohydrates.",
                    meals: {
                        breakfast: [
                            {
                                title: "Joint Health Smoothie",
                                content:
                                    "Pineapple, spinach, and chia seeds blended with coconut water.",
                                healthImpactRange: 91,
                            },
                            {
                                title: "Morning Vitality Porridge",
                                content:
                                    "Oatmeal with walnuts, berries, and a drizzle of honey.",
                                healthImpactRange: 89,
                            },
                            {
                                title: "Vitamin Boost Juice",
                                content:
                                    "Freshly squeezed orange, carrot, and beet juice.",
                                healthImpactRange: 90,
                            },
                        ],
                        lunch: [
                            {
                                title: "Joint-Friendly Salad",
                                content:
                                    "Mixed greens, avocado, cherry tomatoes, grilled chicken, and almonds with a lemon-olive oil dressing.",
                                healthImpactRange: 92,
                            },
                            {
                                title: "Bone Support Soup",
                                content:
                                    "Chicken bone broth with vegetables and a touch of turmeric.",
                                healthImpactRange: 91,
                            },
                            {
                                title: "Flexibility Wrap",
                                content:
                                    "Spinach wrap filled with tuna, celery, and a light mayo dressing.",
                                healthImpactRange: 90,
                            },
                        ],
                        dinner: [
                            {
                                title: "Nutrient-Rich Plate",
                                content:
                                    "Grilled sardines, brown rice, and sautéed kale.",
                                healthImpactRange: 93,
                            },
                            {
                                title: "Joint Care Stir-Fry",
                                content:
                                    "Shrimp, snow peas, and bell peppers in a light garlic sauce.",
                                healthImpactRange: 92,
                            },
                            {
                                title: "Omega Boost Dinner",
                                content:
                                    "Baked salmon with a side of roasted sweet potatoes.",
                                healthImpactRange: 91,
                            },
                        ],
                    },
                },
            ],
            workout: [
                {
                    // Special Workout
                    workoutTitle: "Osteoarthritis Workout Plan",
                    workoutDesc: "Helps maintain joint function.",
                    workoutVideo: "url-to-osteoarthritis-workout-video",
                    workoutImage: "url-to-osteoarthritis-workout-image",
                },
            ],
        },
    },
    {
        // Condition details
        title: "COPD (Respiratory Diseases)",
        conditionDesc:
            "A group of lung diseases that block airflow and make it difficult to breathe.",
        image: "url-to-copd-image",

        conditionChoose: {
            diet: [
                {
                    // Special Diet
                    healthCondition: "COPD (Respiratory Diseases)",
                    description:
                        "Focus on nutrient-dense foods that support lung health. Prioritize lean proteins, whole grains, and antioxidant-rich foods. Avoid processed foods, excessive salt, and deep-fried items.",
                    meals: {
                        breakfast: [
                            {
                                title: "Lung Health Smoothie",
                                content:
                                    "Blueberries, kale, banana, and almond milk blended together.",
                                healthImpactRange: 90,
                            },
                            {
                                title: "Respiratory Boost Oatmeal",
                                content:
                                    "Steel-cut oats topped with mixed berries, honey, and a sprinkle of chia seeds.",
                                healthImpactRange: 88,
                            },
                            {
                                title: "Breathing Ease Muesli",
                                content:
                                    "Whole grain muesli mixed with dried fruits, nuts, and yogurt.",
                                healthImpactRange: 89,
                            },
                        ],
                        lunch: [
                            {
                                title: "Lung Support Salad",
                                content:
                                    "Mixed greens, cherry tomatoes, walnuts, grilled chicken, and avocado with a balsamic vinaigrette.",
                                healthImpactRange: 91,
                            },
                            {
                                title: "Oxygen Boost Soup",
                                content:
                                    "Vegetable broth with lentils, carrots, spinach, and a touch of thyme.",
                                healthImpactRange: 90,
                            },
                            {
                                title: "Breath Fresh Wrap",
                                content:
                                    "Whole grain wrap with hummus, roasted veggies, and turkey slices.",
                                healthImpactRange: 89,
                            },
                        ],
                        dinner: [
                            {
                                title: "Clean Air Plate",
                                content:
                                    "Grilled tilapia, quinoa, and steamed broccoli with a side of lemon-garlic sauce.",
                                healthImpactRange: 92,
                            },
                            {
                                title: "Lung Vitality Stir-Fry",
                                content:
                                    "Tofu, green beans, bell peppers, and almonds tossed in a light soy sauce.",
                                healthImpactRange: 90,
                            },
                            {
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
                    workoutTitle: "COPD Workout Plan",
                    workoutDesc: "Improves lung function.",
                    workoutVideo: "url-to-copd-workout-video",
                    workoutImage: "url-to-copd-workout-image",
                },
            ],
        },
    },
    {
        // Condition details
        title: "Asthma (Respiratory Diseases)",
        conditionDesc:
            "A respiratory condition marked by spasms in the bronchi of the lungs, causing difficulty in breathing.",
        image: "url-to-asthma-image",

        conditionChoose: {
            diet: [
                {
                    // Special Diet
                    healthCondition: "Asthma (Respiratory Diseases)",
                    description:
                        "Prioritize anti-inflammatory foods that may help reduce asthma symptoms. Consume omega-3 fatty acids, antioxidants, and magnesium-rich foods. Avoid potential allergens like dairy and gluten if sensitive.",
                    meals: {
                        breakfast: [
                            {
                                title: "Anti-Inflammatory Smoothie Bowl",
                                content:
                                    "Spinach, chia seeds, flaxseeds, strawberries, and almond milk topped with coconut flakes and pumpkin seeds.",
                                healthImpactRange: 92,
                            },
                            {
                                title: "Omega-3 Rich Granola",
                                content:
                                    "Oats, walnuts, chia seeds, and dried apricots served with almond milk.",
                                healthImpactRange: 91,
                            },
                            {
                                title: "Magnesium Boost Pancakes",
                                content:
                                    "Buckwheat pancakes topped with blueberries, almonds, and a drizzle of honey.",
                                healthImpactRange: 90,
                            },
                        ],
                        lunch: [
                            {
                                title: "Breathing Easy Salad",
                                content:
                                    "Mixed greens, salmon, quinoa, avocado, and cherry tomatoes with an olive oil dressing.",
                                healthImpactRange: 93,
                            },
                            {
                                title: "Asthma-Friendly Soup",
                                content:
                                    "Chicken broth with kale, beans, carrots, and celery. Seasoned with turmeric and black pepper.",
                                healthImpactRange: 92,
                            },
                            {
                                title: "Anti-Allergen Wrap",
                                content:
                                    "Gluten-free wrap filled with grilled chicken, roasted veggies, and hummus.",
                                healthImpactRange: 90,
                            },
                        ],
                        dinner: [
                            {
                                title: "Easy-Breathing Plate",
                                content:
                                    "Grilled mackerel, wild rice, and steamed spinach drizzled with lemon juice.",
                                healthImpactRange: 93,
                            },
                            {
                                title: "Lung Support Stir-Fry",
                                content:
                                    "Shrimp, broccoli, bell peppers, and snap peas cooked in a light ginger sauce.",
                                healthImpactRange: 92,
                            },
                            {
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
                    workoutTitle: "Asthma Workout Plan",
                    workoutDesc:
                        "Improves lung capacity and reduces symptoms (with guidance).",
                    workoutVideo: "url-to-asthma-workout-video",
                    workoutImage: "url-to-asthma-workout-image",
                },
            ],
        },
    },
    {
        // Condition details for Depression
        title: "Depression (Mental Health Disorders)",
        conditionDesc:
            "A mental health disorder characterized by persistently depressed mood or loss of interest in activities, causing significant impairment in daily life.",
        image: "url-to-depression-image",

        conditionChoose: {
            diet: [
                {
                    // Special Diet
                    healthCondition: "Depression (Mental Health Disorders)",
                    description:
                        "Emphasize a balanced diet with mood-boosting nutrients. Include omega-3 fatty acids, tryptophan-rich foods, complex carbohydrates, and B vitamins. Reduce caffeine and processed sugar intake.",
                    meals: {
                        breakfast: [
                            {
                                title: "Mood Boosting Oats",
                                content:
                                    "Oatmeal cooked with almond milk, topped with bananas, chia seeds, walnuts, and a drizzle of honey.",
                                healthImpactRange: 91,
                            },
                            {
                                title: "Sunshine Smoothie",
                                content:
                                    "Blend of oranges, strawberries, Greek yogurt, and a pinch of turmeric.",
                                healthImpactRange: 90,
                            },
                            {
                                title: "Positive Energy Toast",
                                content:
                                    "Whole-grain toast with avocado, cherry tomatoes, and sprinkled with sesame seeds.",
                                healthImpactRange: 89,
                            },
                        ],
                        lunch: [
                            {
                                title: "Serotonin Salad",
                                content:
                                    "Mixed greens, turkey breast, quinoa, sunflower seeds, and carrots with a lemon dressing.",
                                healthImpactRange: 92,
                            },
                            {
                                title: "Brain Boosting Wrap",
                                content:
                                    "Spinach wrap filled with tuna, lettuce, cucumber, and bell peppers.",
                                healthImpactRange: 91,
                            },
                            {
                                title: "Mindful Miso Soup",
                                content:
                                    "Miso soup with tofu, seaweed, green onions, and shiitake mushrooms.",
                                healthImpactRange: 90,
                            },
                        ],
                        dinner: [
                            {
                                title: "Balanced Brain Plate",
                                content:
                                    "Grilled salmon, roasted sweet potatoes, and steamed asparagus.",
                                healthImpactRange: 93,
                            },
                            {
                                title: "Happy Gut Stir-Fry",
                                content:
                                    "Chicken, broccoli, snap peas, and bell peppers cooked in a light soy sauce.",
                                healthImpactRange: 92,
                            },
                            {
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
                    workoutTitle: "Depression Management Workout Plan",
                    workoutDesc:
                        "A series of exercises aimed at improving mental health and boosting mood.",
                    workoutVideo: "url-to-asthma-workout-video",
                    workoutImage: "url-to-asthma-workout-image",
                },
            ],
        },
    },
    {
        // Condition details
        title: "Anxiety (Mental Health Disorders)",
        conditionChoose: {
            diet: [
                {
                    // Special Diet
                    healthCondition: "Anxiety (Mental Health Disorders)",
                    description:
                        "Prioritize foods rich in magnesium, zinc, and omega-3 fatty acids. Incorporate complex carbohydrates and ensure adequate intake of B vitamins. Limit caffeine and alcohol.",
                    meals: {
                        breakfast: [
                            {
                                title: "Calm Start Cereal",
                                content:
                                    "Whole grain cereal with blueberries, flaxseeds, and almond milk.",
                                healthImpactRange: 90,
                            },
                            {
                                title: "Peaceful Protein Pancakes",
                                content:
                                    "Pancakes made with whole wheat, topped with Greek yogurt, almonds, and a splash of maple syrup.",
                                healthImpactRange: 89,
                            },
                            {
                                title: "Zen Zone Smoothie",
                                content:
                                    "Blend of spinach, kiwi, chia seeds, and coconut water.",
                                healthImpactRange: 88,
                            },
                        ],
                        lunch: [
                            {
                                title: "Soothing Salad Bowl",
                                content:
                                    "Spinach, chickpeas, pumpkin seeds, cherry tomatoes, and avocado with olive oil dressing.",
                                healthImpactRange: 92,
                            },
                            {
                                title: "Relaxing Rice Plate",
                                content:
                                    "Brown rice, steamed broccoli, sautéed tempeh, and a sprinkle of sesame seeds.",
                                healthImpactRange: 91,
                            },
                            {
                                title: "Mindful Mushroom Soup",
                                content:
                                    "Creamy mushroom soup with barley, thyme, and a touch of cream.",
                                healthImpactRange: 89,
                            },
                        ],
                        dinner: [
                            {
                                title: "Tranquility Tuna Steak",
                                content:
                                    "Grilled tuna steak, quinoa salad with bell peppers, and a side of sautéed spinach.",
                                healthImpactRange: 94,
                            },
                            {
                                title: "Serenity Stuffed Peppers",
                                content:
                                    "Bell peppers filled with a mix of ground turkey, tomatoes, black beans, and corn.",
                                healthImpactRange: 93,
                            },
                            {
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
                    workoutTitle: "Anxiety Relief Workout Plan",
                    workoutDesc:
                        "Reduces anxiety symptoms by decreasing stress hormones.",
                    workoutVideo: "url-to-asthma-workout-video",
                    workoutImage: "url-to-asthma-workout-image",
                },
            ],
        },
    },
    {
        // Condition details
        title: "Cognitive Decline (Mental Health Disorders)",
        conditionChoose: {
            diet: [
                {
                    // Special Diet
                    healthCondition:
                        "Cognitive Decline (Mental Health Disorders)",
                    description:
                        "Focus on foods that boost brain health like omega-3 fatty acids, antioxidants, and vitamin E. Limit saturated fats and sugars. The Mediterranean diet has been shown to be beneficial.",
                    meals: {
                        breakfast: [
                            {
                                title: "Brainy Berry Bowl",
                                content:
                                    "Greek yogurt topped with walnuts, dark chocolate chunks, and mixed berries (blueberries, strawberries, raspberries).",
                                healthImpactRange: 92,
                            },
                            {
                                title: "Memory-Boost Muffin",
                                content:
                                    "Bran muffins with shredded carrots, zucchini, and a sprinkle of chia seeds.",
                                healthImpactRange: 91,
                            },
                            {
                                title: "Neuro Nutty Oats",
                                content:
                                    "Oatmeal made with almond milk, topped with a mix of nuts (almonds, hazelnuts), and a drizzle of honey.",
                                healthImpactRange: 89,
                            },
                        ],
                        lunch: [
                            {
                                title: "Cognitive Kale Salad",
                                content:
                                    "Kale, roasted beets, quinoa, feta cheese, and walnuts with a light vinaigrette.",
                                healthImpactRange: 93,
                            },
                            {
                                title: "Brain-Protective Pita Pocket",
                                content:
                                    "Whole grain pita filled with hummus, sliced avocado, sprouts, and cherry tomatoes.",
                                healthImpactRange: 91,
                            },
                            {
                                title: "Mental Might Minestrone",
                                content:
                                    "Minestrone soup with beans, whole grain pasta, and an assortment of veggies.",
                                healthImpactRange: 90,
                            },
                        ],
                        dinner: [
                            {
                                title: "Neural Nourishing Salmon",
                                content:
                                    "Grilled salmon fillet, steamed asparagus, and quinoa pilaf with sautéed mushrooms.",
                                healthImpactRange: 95,
                            },
                            {
                                title: "Synapse-Strengthening Stir Fry",
                                content:
                                    "Tofu stir fry with broccoli, bell peppers, snow peas, and a touch of sesame oil, served over brown rice",
                                healthImpactRange: 93,
                            },
                            {
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
                    workoutTitle: "Cognitive Decline (Mental Health Disorders)",
                    workoutDesc:
                        "Enhances brain function and potentially delays onset.",
                    workoutVideo: "",
                    workoutImage: "",
                },
            ],
        },
    },
    {
        // Condition details
        title: "Non-Alcoholic Fatty Liver Disease (NAFLD) (Liver Diseases)",
        conditionChoose: {
            diet: [
                {
                    // Special Diet
                    healthCondition:
                        "Non-Alcoholic Fatty Liver Disease (NAFLD) (Liver Diseases)",
                    description:
                        " Focus on a balanced diet with plenty of fruits, vegetables, whole grains, and healthy fats. Reduce intake of saturated fats, sugars, and refined carbohydrates. Maintain a healthy weight and monitor calorie intake.",
                    meals: {
                        breakfast: [
                            {
                                title: "Liver-Loving Oats",
                                content:
                                    "Steel-cut oats topped with sliced bananas, chia seeds, and a dollop of almond butter.",
                                healthImpactRange: 90,
                            },
                            {
                                title: "Detox Delight Smoothie",
                                content:
                                    "Spinach, apple, ginger, lemon, and a touch of honey blended with unsweetened almond milk.",
                                healthImpactRange: 89,
                            },
                            {
                                title: "Hepatic Health Muffins",
                                content:
                                    " Whole grain muffins with walnuts, flaxseeds, and blueberries.",
                                healthImpactRange: 88,
                            },
                        ],
                        lunch: [
                            {
                                title: "Liver-Care Lentil Soup",
                                content:
                                    "Lentil soup with carrots, celery, onions, and a sprinkle of turmeric.",
                                healthImpactRange: 92,
                            },
                            {
                                title: "Cleanse & Care Salad",
                                content:
                                    "Mixed greens, cherry tomatoes, cucumber, olive oil, and a sprinkle of lemon zest.",
                                healthImpactRange: 91,
                            },
                            {
                                title: "Fatty Liver Fix Wrap",
                                content:
                                    "Whole grain wrap with grilled chicken, mixed veggies, hummus, and a drizzle of olive oil.",
                                healthImpactRange: 90,
                            },
                        ],
                        dinner: [
                            {
                                title: "Liver-Boost Broiled Fish",
                                content:
                                    " Broiled white fish with a side of steamed broccoli and quinoa.",
                                healthImpactRange: 93,
                            },
                            {
                                title: "NAFLD Nourishing Stew",
                                content:
                                    "Vegetable stew with beans, zucchini, bell peppers, and tomatoes.",
                                healthImpactRange: 91,
                            },
                            {
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
                    workoutTitle:
                        "Non-Alcoholic Fatty Liver Disease (NAFLD) (Liver Diseases)",
                    workoutDesc: "Reduces liver fat.",
                    workoutVideo: "",
                    workoutImage: "",
                },
            ],
        },
    },
    {
        // Condition details
        title: "Polycystic Ovary Syndrome (PCOS) (Others)",
        conditionChoose: {
            diet: [
                {
                    // Special Diet
                    healthCondition:
                        "Polycystic Ovary Syndrome (PCOS) (Others)",
                    description:
                        " Prioritize a balanced diet with a focus on high-fiber foods, lean proteins, and anti-inflammatory foods. Limit refined carbohydrates, sugary foods, and drinks.",
                    meals: {
                        breakfast: [
                            {
                                title: "Balanced Hormone Bowl",
                                content:
                                    "Greek yogurt topped with a mix of nuts, seeds, and dark berries.",
                                healthImpactRange: 91,
                            },
                            {
                                title: "PCOS-Power Smoothie",
                                content:
                                    "Kale, avocado, chia seeds, and almond milk blended together.",
                                healthImpactRange: 89,
                            },
                            {
                                title: " Regulating Oats Parfait",
                                content:
                                    "Layered oats, almond butter, kiwi, and walnuts.",
                                healthImpactRange: 88,
                            },
                        ],
                        lunch: [
                            {
                                title: "Fertility-Boost Salad",
                                content:
                                    "Spinach, roasted chickpeas, avocado, and pumpkin seeds with a light vinaigrette.",
                                healthImpactRange: 92,
                            },
                            {
                                title: "Anti-Inflammation Avocado Toast",
                                content:
                                    "Whole grain toast, mashed avocado, cherry tomatoes, and a sprinkle of flaxseeds.",
                                healthImpactRange: 90,
                            },
                            {
                                title: "Cycle-Care Chickpea Bowl",
                                content:
                                    "Chickpeas, quinoa, mixed veggies, and a tahini-lemon dressing.",
                                healthImpactRange: 89,
                            },
                        ],
                        dinner: [
                            {
                                title: "Balancing Broiled Salmon",
                                content:
                                    "Broiled salmon with a side of sautéed kale and roasted sweet potatoes.",
                                healthImpactRange: 94,
                            },
                            {
                                title: " Harmony-Inducing Herb Chicken",
                                content:
                                    " Herb-marinated grilled chicken, steamed green beans, and mashed cauliflower.",
                                healthImpactRange: 92,
                            },
                            {
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
                        "Helps manage symptoms and improve insulin sensitivity.",
                    workoutVideo: "",
                    workoutImage: "",
                },
            ],
        },
    },
];
