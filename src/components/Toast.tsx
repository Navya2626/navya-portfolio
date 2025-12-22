import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
  InformationCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

type ToastType = "success" | "warning" | "error" | "info";

interface ToastProps {
  type: ToastType;
  message: string;
  onClose: () => void;
}

const styles = {
  success: {
    bg: "bg-green-50",
    border: "border-green-500",
    text: "text-green-700",
    icon: <CheckCircleIcon className="h-5 w-5 text-green-600" />,
  },
  warning: {
    bg: "bg-yellow-50",
    border: "border-yellow-500",
    text: "text-yellow-700",
    icon: <ExclamationTriangleIcon className="h-5 w-5 text-yellow-600" />,
  },
  error: {
    bg: "bg-red-50",
    border: "border-red-500",
    text: "text-red-700",
    icon: <XCircleIcon className="h-5 w-5 text-red-600" />,
  },
  info: {
    bg: "bg-blue-50",
    border: "border-blue-500",
    text: "text-blue-700",
    icon: <InformationCircleIcon className="h-5 w-5 text-blue-600" />,
  },
};

export default function Toast({ type, message, onClose }: ToastProps) {
  const style = styles[type];

  return (
    <div
      className={`
        flex items-center gap-3
        w-fit max-w-sm
        rounded-md border-l-4 ${style.border} ${style.bg}
        px-4 py-3 shadow-lg
        animate-toast-slide
      `}
    >
      {style.icon}

      <p className={`text-sm font-medium ${style.text}`}>{message}</p>

      <button onClick={onClose} className="ml-2">
        <XMarkIcon className="h-4 w-4 text-gray-400 hover:text-gray-600" />
      </button>
    </div>
  );
}
