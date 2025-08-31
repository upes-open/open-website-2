"use client";
RegisterPage.displayName = "RegisterPage";
import { useState, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
    { name: "Personal Info", fields: ["name", "sap"] },
    { name: "Academic Details", fields: ["degree", "specialisation", "academicYear"] },
    { name: "Contact Info", fields: ["emailPersonal", "emailCollege", "phone"] },
    { name: "Payment", fields: [] }, // New step for payment
];

interface FormData {
    [key: string]: string;
}

// Separate and memoize the StepComponent to prevent unnecessary re-renders
const StepComponent = memo(({ stepIndex, formData, handleChange, errors }: { stepIndex: number, formData: FormData, handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void, errors: string[] }) => {
    if (steps[stepIndex].name === "Payment") {
        return (
            <motion.div
                key="payment-step"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="p-8 bg-card rounded-2xl shadow-lg border border-border"
            >
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="text-2xl font-bold mb-4 text-center text-card-foreground"
                >
                    Secure Your Membership
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="text-center text-muted-foreground mb-6"
                >
                    With this membership, you will be able to register for future events at a discounted price.
                </motion.p>
                <motion.button
                    type="button"
                    onClick={() => {
                        const queryString = new URLSearchParams(formData).toString();
                        console.log(queryString);
                        const paymentPageURL = "https://example-payment-provider.com/checkout";
                        window.location.href = `${paymentPageURL}?${queryString}`;
                    }}
                    className="w-full px-6 py-4 rounded-full font-semibold text-primary-foreground bg-primary shadow-md hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Proceed to Payment
                </motion.button>
            </motion.div>
        );
    }

    const fieldDefinitions = [
        { label: "Name", name: "name", type: "text" },
        { label: "SAP", name: "sap", type: "text" },
        { label: "Degree", name: "degree", type: "text" },
        { label: "Specialisation", name: "specialisation", type: "text" },
        { label: "Academic Year", name: "academicYear", type: "text" },
        { label: "Email (Personal)", name: "emailPersonal", type: "email" },
        { label: "Email (College)", name: "emailCollege", type: "email" },
        { label: "Phone No (WhatsApp)", name: "phone", type: "tel" },
    ];

    return (
        <motion.div
            key={stepIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-6"
        >
            <h2 className="text-xl font-bold">{steps[stepIndex].name}</h2>
            {fieldDefinitions.filter(field => steps[stepIndex].fields.includes(field.name)).map((field, idx) => (
                <motion.div
                    key={field.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.1, duration: 0.4 }}
                    className="m-4"
                >
                    <label
                        htmlFor={field.name}
                        className="block font-medium mb-1 text-sm text-muted-foreground"
                    >
                        {field.label}
                    </label>
                    <input
                        type={field.type}
                        name={field.name}
                        id={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        className={`w-full border-b-2 bg-transparent focus:outline-none transition-colors duration-300 px-0 py-2 ${errors.includes(field.name) ? "border-destructive" : "focus:border-primary"}`}
                        required
                    />
                </motion.div>
            ))}
        </motion.div>
    );
});
StepComponent.displayName = "StepComponent";

export default function RegisterPage() {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [formData, setFormData] = useState<FormData>({});
    const [validationErrors, setValidationErrors] = useState<string[]>([]);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev: FormData) => ({ ...prev, [name]: value }));
        // Clear the error for this field as the user starts typing
        setValidationErrors((prev) => prev.filter(err => err !== name));
    }, []);

    const handleNext = () => {
        const fieldsToValidate = steps[currentStep].fields;
        const newErrors: string[] = [];
        
        fieldsToValidate.forEach(field => {
            if (!formData[field] || formData[field].trim() === "") {
                newErrors.push(field);
            }
        });

        if (newErrors.length > 0) {
            setValidationErrors(newErrors);
        } else {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        setCurrentStep((prev) => prev - 1);
    };

    const isFirstStep = currentStep === 0;
    const isLastStep = currentStep === steps.length - 1;

    return (
        <main
            className="min-h-screen relative flex items-center justify-center py-12 px-6 overflow-hidden"
            style={{
                background: "var(--background)",
                color: "var(--foreground)",
            }}
        >
            {/* Background Accent Element 1 */}
            <motion.div
                initial={{ scale: 0.5, opacity: 0, rotate: 45 }}
                animate={{ scale: 1.2, opacity: 0.8, rotate: 45 }}
                transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-primary/20 blur-2xl z-0"
            />
            {/* Background Accent Element 2 */}
            <motion.div
                initial={{ scale: 0.5, opacity: 0, rotate: -30 }}
                animate={{ scale: 1.2, opacity: 0.8, rotate: -30 }}
                transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/20 blur-2xl z-0"
            />
            
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-xl w-full relative z-10"
            >
                {/* Translucent Card Container */}
                <motion.div
                    className="p-8 md:p-12 rounded-3xl bg-card/60 backdrop-blur-md shadow-2xl border border-border"
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-3xl font-bold text-center mb-8 text-card-foreground"
                    >
                        Become a Member
                    </motion.h1>

                    <motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.5 }}
						className="relative mb-8 px-4 sm:px-8 md:px-12" // Adjusted padding
					>
						<div className="flex justify-between items-start relative z-10">
							{steps.map((step, index) => (
								<motion.div
									key={index}
									className="flex-1 flex flex-col items-center"
								>
									<div
										className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm md:text-base ${
											currentStep >= index
												? "bg-primary text-primary-foreground"
												: "bg-muted text-muted-foreground"
										} transition-colors duration-300`}
									>
										{index + 1}
									</div>
									<p className="text-xs mt-2 text-center text-muted-foreground">
										{step.name}
									</p>
								</motion.div>
							))}
						</div>
						
					</motion.div>                 
                    <motion.form
                        onSubmit={(e) => e.preventDefault()}
                        className="relative overflow-hidden m-4"
                    >
                        <AnimatePresence mode="wait">
                            <StepComponent 
                                key={currentStep} 
                                stepIndex={currentStep} 
                                formData={formData} 
                                handleChange={handleChange} 
                                errors={validationErrors}
                            />
                        </AnimatePresence>

                        <div className="flex justify-between m-4 mt-8">
                            {!isFirstStep && (
                                <motion.button
                                    type="button"
                                    onClick={handlePrev}
                                    className="px-6 py-3 rounded-full font-semibold"
                                    style={{
                                        background: "var(--primary-foreground)",
                                        color: "var(--primary)",
                                        border: "1px solid var(--border)",
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Back
                                </motion.button>
                            )}
                            {!isLastStep && (
                                <motion.button
                                    type="button"
                                    onClick={handleNext}
                                    className={`px-6 py-3 rounded-full font-semibold ${isFirstStep ? "ml-auto" : ""}`}
                                    style={{
                                        background: "var(--primary)",
                                        color: "var(--primary-foreground)",
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Next
                                </motion.button>
                            )}
                        </div>
                    </motion.form>
                </motion.div>
            </motion.div>
        </main>
    );
}