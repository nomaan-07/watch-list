import Button from "./Button";

interface ActionButtonsProps {
  onCancel: () => void;
  onConfirm: () => void;
  isLoading?: boolean;
  confirmText: string;
  loadingText: string;
  variation: "danger" | "primary";
  message: string;
}

function ActionButtons({
  onConfirm,
  isLoading = false,
  confirmText,
  loadingText,
  onCancel,
  variation,
  message,
}: ActionButtonsProps) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <p className="text-xl">{message}</p>
      <div className="flex gap-4">
        <Button variation={variation} onClick={onConfirm} disabled={isLoading}>
          {isLoading ? loadingText : confirmText}
        </Button>
        <Button onClick={onCancel} disabled={isLoading}>
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default ActionButtons;
