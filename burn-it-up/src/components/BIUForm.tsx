import { useState } from 'react';
import Logo from '../assets/logo.png'
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { base_url } from '../config/config';
import C1 from '../assets/c1.jpg';
import C2 from '../assets/c2.jpg';
import C3 from '../assets/c3.jpg';
import C4 from '../assets/c4.jpg';

const CaloriesBurnedCalculator = () => {

    const imagemap = {
        'Low': C1,
        "Medium.Low": C2,
        "Medium.High": C3,
        "High": C4
    }
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [error, setError] = useState('');
    const [isErrorVisible, setIsErrorVisible] = useState(false);
    const [prediction, setPrediction] = useState<keyof typeof imagemap | null>(null);
    // State to track the current step and form data
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        workoutType: '',
        workoutDuration: '',
        gender: '',
        age: '',
        weight: '',
        height: '',
        stepsTaken: '',
        distanceCovered: '',
        workoutIntensity: '',
        moodBeforeWorkout: '',
        moodAfterWorkout: '',
        sleepHours: '',
        dailyCaloriesIntake: '',
        heartRate: '',
        restingHeartRate: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const nextStep = () => {
        if (step < 3) {
            setStep(step + 1);
        }
    };

    const prevStep = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };
    const handleClear = (field: string) => {
        setFormData({
            ...formData,
            [field]: ''
        });
    };
    const handleClearAll = () => {
        setFormData({
            workoutType: '',
            workoutDuration: '',
            gender: '',
            age: '',
            weight: '',
            height: '',
            stepsTaken: '',
            distanceCovered: '',
            workoutIntensity: '',
            moodBeforeWorkout: '',
            moodAfterWorkout: '',
            sleepHours: '',
            dailyCaloriesIntake: '',
            heartRate: '',
            restingHeartRate: '',
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Reset errors on submit
        setErrors({});
        setIsErrorVisible(false);

        // Validate the current step
        if (validateStep(step)) {
            try {
                // Prepare the data to be sent in the body of the request
                const requestData = {
                    age: parseInt(formData.age),
                    gender: formData.gender,
                    height: parseInt(formData.height),
                    weight: parseInt(formData.weight),
                    workoutType: formData.workoutType,
                    workoutDuration: parseInt(formData.workoutDuration),
                    heartRate: parseInt(formData.heartRate),
                    stepsTaken: parseInt(formData.stepsTaken),
                    distance: parseFloat(formData.distanceCovered),
                    workoutIntensity: formData.workoutIntensity,
                    sleepHours: parseInt(formData.sleepHours),
                    dailyCaloriesIntake: parseInt(formData.dailyCaloriesIntake),
                    restingHeartRate: parseInt(formData.restingHeartRate),
                    moodBeforeWorkout: formData.moodBeforeWorkout,
                    moodAfterWorkout: formData.moodAfterWorkout
                };

                // Send POST request using Axios
                const response = await axios.post(`${base_url}`, requestData);

                // Handle the response
                if (response.data) {
                    const { prediction, probabilities } = response.data;
                    console.log(probabilities)
                    setPrediction(prediction);  // Store the prediction in the state
                    setStep(4);
                }
            } catch (error) {
                console.error('There was an error sending the request:', error);
                setErrors({ general: "There was an error while calculating calories burned." });
                setIsErrorVisible(true); // Show error message
            }
        } else {
            setIsErrorVisible(true);  // Show error message for incomplete form
            setErrors({ general: "Please fill out all required fields." });
        }
    };
    const validateStep = (step: number): boolean => {
        const stepFields = getStepFields(step);
        let formValid = true;
        const newErrors: { [key: string]: string } = {};

        stepFields.forEach((field) => {
            if (!formData[field as keyof typeof formData]) {
                formValid = false;
                newErrors[field] = 'This field is required';
            }
        });

        setErrors(newErrors);
        return formValid;
    }
    const getStepFields = (step: number) => {
        switch (step) {
            case 1:
                return ['workoutType', 'workoutDuration', 'gender', 'age', 'weight', 'height'];
            case 2:
                return ['stepsTaken', 'distanceCovered', 'workoutIntensity', 'moodBeforeWorkout', 'moodAfterWorkout'];
            case 3:
                return ['sleepHours', 'dailyCaloriesIntake', 'heartRate', 'restingHeartRate'];
            default:
                return [];
        }
    };

    return (
        <div className="container mx-auto px-8 py-8 w-[90%]">
            <div className='flex items-center justify-center flex-col'>
                <img
                    src={Logo}
                    alt='logo'
                    className="h-[120px]  w-auto min-w-[300px] drop-shadow-sm hover:drop-shadow-md transition-all duration-300 object-cover"
                />
                <h2 className="text-4xl font-bold text-center text-orange-600 mb-2">
                    Calories Burned Calculator
                </h2>
            </div>




            {/* Display Form Title and Instructions */}
            <div className="mb-8">
                <p className="text-lg text-gray-700 mb-4 text-center">
                    With our easy calories burned calculator, you can find out the calories burned throughout the workout!
                </p>
            </div>


            {/* Personal Section (Step 1) */}
            {step === 1 && (
                <div className="mb-8">
                    {/* Clear All Fields Button */}
                    <button
                        onClick={handleClearAll}
                        className="relative top-4 right-0 px-6 py-3 rounded-lg text-lg font-medium text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                    >
                        Clear All Fields
                    </button>
                    {/* Personal Section Title */}
                    <div className="text-4xl mb-12 text-center font-bold">
                        <p>Personal:</p>
                    </div>


                    {/* Workout Type */}
                    <div className="mb-12 border-[1px] border-orange-400 rounded-2xl py-8 px-20 relative">
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white text-lg font-bold rounded-full w-10 h-10 flex items-center justify-center">
                            1
                        </div>

                        <label htmlFor="workoutType" className="block text-gray-700 mb-2 text-center">Enter a workout type to calculate your calories burned</label>
                        <div className="flex justify-center">
                            <select
                                name="workoutType"
                                value={formData.workoutType}
                                onChange={handleChange}
                                className="w-full max-w-1/3 p-4 border-2 border-orange-400 rounded-md"
                                required
                            >
                                <option value="" disabled>Select Workout Type</option>
                                <option value="Running">Running</option>
                                <option value="HIIT">HIIT</option>
                                <option value="Strength">Strength</option>
                                <option value="Cardio">Cardio</option>
                                <option value="Cycling">Cycling</option>
                                <option value="Yoga">Yoga</option>
                            </select>
                            {formData.workoutType && (
                                <button
                                    type="button"
                                    onClick={() => handleClear('workoutType')}
                                    className="ml-2"
                                >
                                    <CloseIcon />
                                </button>
                            )}
                            {errors.workoutType && <p className="text-red-500 text-sm">{errors.workoutType}</p>}
                        </div>

                    </div>

                    {/* Workout Duration & Gender */}
                    <div className="mb-8 flex gap-8">
                        {/* Workout Duration */}
                        <div className="relative mb-4 border-[1px] border-orange-400 rounded-2xl py-8 px-20 w-full">
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white text-lg font-bold rounded-full w-10 h-10 flex items-center justify-center">
                                2
                            </div>

                            <label htmlFor="duration" className="block text-gray-700 mb-2">Workout Duration</label>
                            <div className="flex justify-center items-center">
                                <input
                                    type="number"
                                    name="workoutDuration"
                                    value={formData.workoutDuration}
                                    onChange={(e) => {
                                        // Validate positive number on change
                                        const value = e.target.value;
                                        if (value && Number(value) >= 0) {
                                            setFormData({ ...formData, workoutDuration: value });
                                            setError('');
                                        } else {
                                            // setError('Please enter a positive number');
                                        }
                                    }}
                                    className="w-full p-4 border-2 border-orange-400 rounded-md focus:outline-none focus:border-orange-600 max-w-1/3"
                                    required
                                    placeholder="minutes"


                                /> <span className="ml-2 text-gray-700">min</span>
                                {formData.workoutDuration && (
                                    <button
                                        type="button"
                                        onClick={() => handleClear('workoutDuration')}
                                        className="ml-2"
                                    >
                                        <CloseIcon />
                                    </button>
                                )}
                                {error && <p className="text-red-500 text-sm">{error}</p>}
                            </div>
                        </div>

                        {/* Gender */}
                        <div className="relative mb-4 border-[1px] border-orange-400 rounded-2xl py-8 px-20 w-full">
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white text-lg font-bold rounded-full w-10 h-10 flex items-center justify-center">
                                3
                            </div>

                            <label className="block text-gray-700 mb-2 text-center">What is your sex?</label>
                            <div className="flex gap-4 justify-center">
                                <button
                                    type="button"
                                    name="gender"
                                    value="Male"
                                    onClick={() => setFormData({ ...formData, gender: 'Male' })}
                                    className={`px-6 py-3 rounded-lg text-lg ${formData.gender === 'Male' ? 'bg-orange-600 text-white' : 'text-orange-600 border-2 border-orange-300'} shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
                                >
                                    Male
                                </button>
                                <button
                                    type="button"
                                    name="gender"
                                    value="Female"
                                    onClick={() => setFormData({ ...formData, gender: 'Female' })}
                                    className={`px-6 py-3 rounded-lg text-lg ${formData.gender === 'Female' ? 'bg-orange-600 text-white' : 'text-orange-600 border-2 border-orange-300'} shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
                                >
                                    Female
                                </button>
                                <button
                                    type="button"
                                    name="gender"
                                    value="Other"
                                    onClick={() => setFormData({ ...formData, gender: 'Other' })}
                                    className={`px-6 py-3 rounded-lg text-lg ${formData.gender === 'Other' ? 'bg-orange-600 text-white' : 'text-orange-600 border-2 border-orange-300'} shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
                                >
                                    Other
                                </button>
                                {formData.gender && (
                                    <button
                                        type="button"
                                        onClick={() => handleClear('gender')}
                                        className="ml-2"
                                    >
                                        <CloseIcon />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Age and Weight */}
                    <div className="mb-8 flex gap-8">
                        {/* Age */}
                        <div className="relative mb-4 border-[1px] border-orange-400 rounded-2xl py-8 px-20 w-full">
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white text-lg font-bold rounded-full w-10 h-10 flex items-center justify-center">
                                4
                            </div>

                            <label htmlFor="age" className="block text-gray-700 mb-2 text-center">How old are you? </label>
                            <div className="flex justify-center items-center">
                                <input
                                    type="number"
                                    name="age"
                                    value={formData.age}
                                    onChange={(e) => {
                                        // Validate positive number on change
                                        const value = e.target.value;
                                        if (value && Number(value) >= 0) {
                                            setFormData({ ...formData, age: value });
                                            setError('');
                                        } else {
                                            // setError('Please enter a positive number');
                                        }
                                    }}
                                    className="w-full p-4 border-2 border-gray-300 rounded-md max-w-1/3"
                                    required
                                    placeholder='years'
                                /><span className="ml-2 text-gray-700">years</span>
                                {formData.age && (
                                    <button
                                        type="button"
                                        onClick={() => handleClear('age')}
                                        className="ml-2"
                                    >
                                        <CloseIcon />
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Weight */}
                        <div className="relative mb-4 border-[1px] border-orange-400 rounded-2xl py-8 px-20 w-full">
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white text-lg font-bold rounded-full w-10 h-10 flex items-center justify-center">
                                5
                            </div>

                            <label htmlFor="weight" className="block text-gray-700 mb-2 text-center">How much do you weigh? </label>
                            <div className="flex justify-center items-center">
                                <input
                                    type="number"
                                    name="weight"
                                    value={formData.weight}
                                    onChange={(e) => {
                                        // Validate positive number on change
                                        const value = e.target.value;
                                        if (value && Number(value) >= 0) {
                                            setFormData({ ...formData, weight: value });
                                            setError('');
                                        } else {
                                            // setError('Please enter a positive number');
                                        }
                                    }}
                                    className="w-full p-4 border-2 border-gray-300 rounded-md max-w-1/3"
                                    required
                                    placeholder='kg'
                                /><span className="ml-2 text-gray-700">kg</span>
                                {formData.weight && (
                                    <button
                                        type="button"
                                        onClick={() => handleClear('weight')}
                                        className="ml-2"
                                    >
                                        <CloseIcon />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Height */}
                    <div className="mb-4 border-[1px] border-orange-400 rounded-2xl py-8 px-20 relative">
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white text-lg font-bold rounded-full w-10 h-10 flex items-center justify-center">
                            6
                        </div>
                        <label htmlFor="height" className="block text-gray-700 mb-2 text-center">How tall are you?</label>
                        <div className="flex justify-center items-center">
                            <input
                                type="number"
                                name="height"
                                value={formData.height}
                                onChange={(e) => {
                                    // Validate positive number on change
                                    const value = e.target.value;
                                    if (value && Number(value) >= 0) {
                                        setFormData({ ...formData, height: value });
                                        setError('');
                                    } else {
                                        // setError('Please enter a positive number');
                                    }
                                }}
                                className="w-full p-4 border-2 border-gray-300 rounded-md max-w-1/3"
                                required
                                placeholder='cm'
                            />
                            <span className="ml-2 text-gray-700">cm</span>
                            {formData.height && (
                                <button
                                    type="button"
                                    onClick={() => handleClear('height')}
                                    className="ml-2"
                                >
                                    <CloseIcon />
                                </button>
                            )}
                        </div>
                    </div>
                </div>

            )}

            {/* Workout Section (Step 2) */}
            {step === 2 && (
                <div className="mb-8">
                    {/* Clear All Fields Button */}
                    <button
                        onClick={handleClearAll}
                        className="relative top-4 right-0 px-6 py-3 rounded-lg text-lg font-medium text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                    >
                        Clear All Fields
                    </button>
                    {/* Workout Section Title */}
                    <div className="text-4xl mb-12 text-center font-bold">
                        <p>Workout:</p>
                    </div>

                    {/* Steps Taken */}
                    <div className="relative mb-12 border-[1px] border-orange-400 rounded-2xl py-8 px-20">
                        {/* Number "1" Circle at the top */}
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white text-lg font-bold rounded-full w-10 h-10 flex items-center justify-center">
                            1
                        </div>

                        <label htmlFor="stepsTaken" className="block text-gray-700 mb-2 text-center">How many steps have you taken per day?</label>
                        <div className="flex justify-center">
                            <input
                                type="number"
                                name="stepsTaken"
                                value={formData.stepsTaken}
                                onChange={(e) => {
                                    // Validate positive number on change
                                    const value = e.target.value;
                                    if (value && Number(value) >= 0) {
                                        setFormData({ ...formData, stepsTaken: value });
                                        setError('');
                                    } else {
                                        // setError('Please enter a positive number');
                                    }
                                }}
                                className="w-full p-4 border-2 border-orange-400 rounded-md focus:outline-none focus:border-orange-600 max-w-1/3"
                                required
                            /> {formData.stepsTaken && (
                                <button
                                    type="button"
                                    onClick={() => handleClear('stepsTaken')}
                                    className="ml-2"
                                >
                                    <CloseIcon />
                                </button>
                            )}
                        </div>
                    </div>
                    <div className='flex flex-row gap-8 mb-8'>
                        {/* Distance Covered */}
                        <div className="relative mb-4 border-[1px] border-orange-400 rounded-2xl py-8 px-20 w-full">
                            {/* Number "2" Circle at the top */}
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white text-lg font-bold rounded-full w-10 h-10 flex items-center justify-center">
                                2
                            </div>

                            <label htmlFor="distanceCovered" className="block text-gray-700 mb-2 text-center">How much distance have you covered per day?</label>
                            <div className="flex justify-center items-center">
                                <input
                                    type="number"
                                    name="distanceCovered"
                                    value={formData.distanceCovered}
                                    onChange={(e) => {
                                        // Validate positive number on change
                                        const value = e.target.value;
                                        if (value && Number(value) >= 0) {
                                            setFormData({ ...formData, distanceCovered: value });
                                            setError('');
                                        } else {
                                            // setError('Please enter a positive number');
                                        }
                                    }}
                                    className="w-full p-4 border-2 border-orange-400 rounded-md focus:outline-none focus:border-orange-600 max-w-1/3"
                                    required
                                    placeholder='km'
                                /><span className="ml-2 text-gray-700">km</span>
                                {formData.distanceCovered && (
                                    <button
                                        type="button"
                                        onClick={() => handleClear('distanceCovered')}
                                        className="ml-2"
                                    >
                                        <CloseIcon />
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Workout Intensity */}
                        <div className="relative mb-4 border-[1px] border-orange-400 rounded-2xl py-8 px-20 w-full">
                            {/* Number "3" Circle at the top */}
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white text-lg font-bold rounded-full w-10 h-10 flex items-center justify-center">
                                3
                            </div>

                            <label htmlFor="workoutIntensity" className="block text-gray-700 mb-2 text-center">What is your workout intensity?</label>
                            <div className="flex gap-4 justify-center">
                                <button
                                    type="button"
                                    name="workoutIntensity"
                                    value="Low"
                                    onClick={() => setFormData({ ...formData, workoutIntensity: 'Low' })}
                                    className={`px-6 py-3 rounded-lg text-lg ${formData.workoutIntensity === 'Low' ? 'bg-orange-600 text-white' : 'text-orange-600 border-2 border-orange-300'} shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
                                >
                                    Low
                                </button>
                                <button
                                    type="button"
                                    name="workoutIntensity"
                                    value="Medium"
                                    onClick={() => setFormData({ ...formData, workoutIntensity: 'Medium' })}
                                    className={`px-6 py-3 rounded-lg text-lg ${formData.workoutIntensity === 'Medium' ? 'bg-orange-600 text-white' : 'text-orange-600 border-2 border-orange-300'} shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
                                >
                                    Medium
                                </button>
                                <button
                                    type="button"
                                    name="workoutIntensity"
                                    value="High"
                                    onClick={() => setFormData({ ...formData, workoutIntensity: 'High' })}
                                    className={`px-6 py-3 rounded-lg text-lg ${formData.workoutIntensity === 'High' ? 'bg-orange-600 text-white' : 'text-orange-600 border-2 border-orange-300'} shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
                                >
                                    High
                                </button>
                                {formData.workoutIntensity && (
                                    <button
                                        type="button"
                                        onClick={() => handleClear('workoutIntensity')}
                                        className="ml-2"
                                    >
                                        <CloseIcon />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 justify-center">
                        {/* Mood Before Workout */}
                        <div className="relative mb-4 border-[1px] border-orange-400 rounded-2xl py-8 px-20 w-full">
                            {/* Number "4" Circle at the top */}
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white text-lg font-bold rounded-full w-10 h-10 flex items-center justify-center">
                                4
                            </div>

                            <label htmlFor="moodBeforeWorkout" className="block text-gray-700 mb-2 text-center">How is your mood before workout?</label>
                            <div className="flex justify-center">
                                <select
                                    name="moodBeforeWorkout"
                                    value={formData.moodBeforeWorkout}
                                    onChange={handleChange}
                                    className="w-full p-4 border-2 border-orange-400 rounded-md focus:outline-none focus:border-orange-600 max-w-2/3"
                                    required
                                >
                                    <option value="" disabled>Select Mood</option>
                                    <option value="Happy">😊 Happy</option>
                                    <option value="Neutral">😐 Neutral</option>
                                    <option value="Tired">😴 Tired</option>
                                    <option value="Stressed">😓 Stressed</option>
                                </select>
                                {formData.moodBeforeWorkout && (
                                    <button
                                        type="button"
                                        onClick={() => handleClear('moodBeforeWorkout')}
                                        className="ml-2"
                                    >
                                        <CloseIcon />
                                    </button>
                                )}

                            </div>
                        </div>

                        {/* Mood After Workout */}
                        <div className="relative mb-4 border-[1px] border-orange-400 rounded-2xl py-8 px-20 w-full">
                            {/* Number "5" Circle at the top */}
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white text-lg font-bold rounded-full w-10 h-10 flex items-center justify-center">
                                5
                            </div>

                            <label htmlFor="moodAfterWorkout" className="block text-gray-700 mb-2 text-center">How is your mood after workout?</label>
                            <div className="flex justify-center">
                                <select
                                    name="moodAfterWorkout"
                                    value={formData.moodAfterWorkout}
                                    onChange={handleChange}
                                    className="w-full p-4 border-2 border-orange-400 rounded-md focus:outline-none focus:border-orange-600 max-w-2/3"
                                    required
                                >
                                    <option value="" disabled>Select Mood</option>
                                    <option value="Energized">😊 Energized</option>
                                    <option value="Neutral">😐 Neutral</option>
                                    <option value="Fatigued">😩 Fatigued</option>
                                </select>
                                {formData.moodAfterWorkout && (
                                    <button
                                        type="button"
                                        onClick={() => handleClear('moodAfterWorkout')}
                                        className="ml-2"
                                    >
                                        <CloseIcon />
                                    </button>
                                )}

                            </div>
                        </div>
                    </div>
                </div>

            )}

            {/* Wellness Section (Step 3) */}
            {step === 3 && (
                <div className="mb-8">
                    {/* Clear All Fields Button */}
                    <button
                        onClick={handleClearAll}
                        className="relative top-4 right-0 px-6 py-3 rounded-lg text-lg font-medium text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                    >
                        Clear All Fields
                    </button>
                    {/* Wellness Section Title */}
                    <div className="text-4xl mb-12 text-center font-bold">
                        <p>Wellness:</p>

                    </div>


                    {/* Sleep Hours */}
                    <div className="relative mb-12 border-[1px] border-orange-400 rounded-2xl py-8 px-20">
                        {/* Number "1" Circle at the top */}
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white text-lg font-bold rounded-full w-10 h-10 flex items-center justify-center">
                            1
                        </div>

                        <label htmlFor="sleepHours" className="block text-gray-700 mb-2 text-center">How many hours do you sleep?</label>
                        <div className="flex justify-center items-center">
                            <input
                                type="number"
                                name="sleepHours"
                                value={formData.sleepHours}
                                onChange={(e) => {
                                    // Validate positive number on change
                                    const value = e.target.value;
                                    if (value && Number(value) >= 0) {
                                        setFormData({ ...formData, sleepHours: value });
                                        setError('');
                                    } else {
                                        // setError('Please enter a positive number');
                                    }
                                }}
                                className="w-full p-4 border-2 border-orange-400 rounded-md focus:outline-none focus:border-orange-600 max-w-1/3"
                                required
                                placeholder='hours'
                            /><span className="ml-2 text-gray-700">hours</span>
                            {formData.sleepHours && (
                                <button
                                    type="button"
                                    onClick={() => handleClear('sleepHours')}
                                    className="ml-2"
                                >
                                    <CloseIcon />
                                </button>
                            )}
                        </div>
                    </div>
                    <div className='flex flex-row gap-8 mb-8'>

                        {/* Daily Calories Intake */}
                        <div className="relative mb-4 border-[1px] border-orange-400 rounded-2xl py-8 px-20 w-full">
                            {/* Number "2" Circle at the top */}
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white text-lg font-bold rounded-full w-10 h-10 flex items-center justify-center">
                                2
                            </div>

                            <label htmlFor="dailyCaloriesIntake" className="block text-gray-700 mb-2 text-center">What is your daily calorie intake?</label>
                            <div className="flex justify-center items-center">
                                <input
                                    type="number"
                                    name="dailyCaloriesIntake"
                                    value={formData.dailyCaloriesIntake}
                                    onChange={(e) => {
                                        // Validate positive number on change
                                        const value = e.target.value;
                                        if (value && Number(value) >= 0) {
                                            setFormData({ ...formData, dailyCaloriesIntake: value });
                                            setError('');
                                        } else {
                                            // setError('Please enter a positive number');
                                        }
                                    }}
                                    className="w-full p-4 border-2 border-orange-400 rounded-md focus:outline-none focus:border-orange-600 max-w-1/3"
                                    required
                                    placeholder='cal'
                                /><span className="ml-2 text-gray-700">cal</span>
                                {formData.dailyCaloriesIntake && (
                                    <button
                                        type="button"
                                        onClick={() => handleClear('dailyCaloriesIntake')}
                                        className="ml-2"
                                    >
                                        <CloseIcon />
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Heart Rate */}
                        <div className="relative mb-4 border-[1px] border-orange-400 rounded-2xl py-8 px-20 w-full">
                            {/* Number "3" Circle at the top */}
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white text-lg font-bold rounded-full w-10 h-10 flex items-center justify-center">
                                3
                            </div>

                            <label htmlFor="heartRate" className="block text-gray-700 mb-2 text-center">What is your heart rate?</label>
                            <div className="flex justify-center items-center">
                                <input
                                    type="number"
                                    name="heartRate"
                                    value={formData.heartRate}
                                    onChange={(e) => {
                                        // Validate positive number on change
                                        const value = e.target.value;
                                        if (value && Number(value) >= 0) {
                                            setFormData({ ...formData, heartRate: value });
                                            setError('');
                                        } else {
                                            // setError('Please enter a positive number');
                                        }
                                    }}
                                    className="w-full p-4 border-2 border-orange-400 rounded-md focus:outline-none focus:border-orange-600 max-w-1/3"
                                    required
                                    placeholder='bpm'
                                /><span className="ml-2 text-gray-700">bpm</span>
                                {formData.heartRate && (
                                    <button
                                        type="button"
                                        onClick={() => handleClear('heartRate')}
                                        className="ml-2"
                                    >
                                        <CloseIcon />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Resting Heart Rate */}
                    <div className="relative mb-4 border-[1px] border-orange-400 rounded-2xl py-8 px-20">
                        {/* Number "4" Circle at the top */}
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white text-lg font-bold rounded-full w-10 h-10 flex items-center justify-center">
                            4
                        </div>

                        <label htmlFor="restingHeartRate" className="block text-gray-700 mb-2 text-center">What is your resting heart rate?</label>
                        <div className="flex justify-center items-center">
                            <input
                                type="number"
                                name="restingHeartRate"
                                value={formData.restingHeartRate}
                                onChange={(e) => {
                                    // Validate positive number on change
                                    const value = e.target.value;
                                    if (value && Number(value) >= 0) {
                                        setFormData({ ...formData, restingHeartRate: value });
                                        setError('');
                                    } else {
                                        // setError('Please enter a positive number');
                                    }
                                }}
                                className="w-full p-4 border-2 border-orange-400 rounded-md focus:outline-none focus:border-orange-600 max-w-1/3"
                                required

                                placeholder='bpm'
                            /><span className="ml-2 text-gray-700">bpm</span>
                            {formData.restingHeartRate && (
                                <button
                                    type="button"
                                    onClick={() => handleClear('restingHeartRate')}
                                    className="ml-2"
                                >
                                    <CloseIcon />
                                </button>
                            )}
                        </div>
                    </div>
                </div>

            )}
            {step === 4 && prediction && (

                <div className="mt-8 p-4 border-2 border-orange-600 rounded-lg mb-12 max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-orange-600 mb-4">Your Personal Result</h2>

                    {/* Display the image */}
                    <div className="flex justify-center mb-6 mt-2  rounded-2xl ">

                        <img
                            src={prediction ? imagemap[prediction] : C1} // Default to C1 if the prediction is invalid
                            alt="Workout Result"
                            className="w-[350px] h-[300px] object-cover rounded-2xl overflow-hidden"
                        />
                    </div>

                    <p className="text-xl text-center">Your workout will likely result in a: </p>
                    <p className='text-xl text-center'><strong>{prediction}</strong></p>

                    <button
                        onClick={() => setStep(1)}
                        className="px-6 py-3 rounded-lg text-lg font-medium text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                        Start Over
                    </button>
                </div>

            )}
            {/* Error Message */}
            {isErrorVisible && (
                <div className="bg-red-100 text-red-600 p-4 rounded-lg  border-2 border-red-500 mb-12">
                    <div className="flex items-center">
                        <span className="mr-2 text-xl">⚠️</span>
                        <ul>
                            {Object.values(errors).map((error, index) => (
                                <li key={index}>{error}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4">
                {step > 1 && (
                    <button
                        type="button"
                        onClick={prevStep}
                        className="bg-gray-600 text-white px-8 py-4 rounded-lg shadow-md hover:bg-gray-700 transform hover:scale-105 transition-all duration-300"
                    >
                        Previous
                    </button>
                )}
                {step < 3 ? (
                    <button
                        type="button"
                        onClick={nextStep}
                        className="bg-orange-600 text-white px-8 py-4 rounded-lg shadow-md hover:bg-orange-700 transform hover:scale-105 transition-all duration-300"
                    >
                        Next
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="bg-orange-600 text-white px-8 py-4 rounded-lg shadow-md hover:bg-orange-700 transform hover:scale-105 transition-all duration-300"
                    >
                        Calculate Calories Burned
                    </button>
                )}
            </div>

        </div>
    );
};

export default CaloriesBurnedCalculator;
