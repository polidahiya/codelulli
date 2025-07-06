import React from "react";
import { RiDeleteBackFill } from "react-icons/ri";

function StandardTextAreaField({
  titlename,
  value,
  isRequired = true,
  rows = 4,
  onchange,
  clear,
  placeholder = "",
  disabled = false,
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-600">
        {titlename}
      </label>
      <div className="flex gap-2 mt-1">
        <textarea
          value={value}
          onChange={onchange}
          required={isRequired}
          disabled={disabled}
          rows={rows}
          className="w-full p-2 border rounded-md resize-none outline-none"
          placeholder={placeholder}
        />
        <button
          type="button"
          className="px-4 py-2 border text-gray-500 rounded-md"
          onClick={clear}
          aria-label="clear"
          title="clear"
        >
          <RiDeleteBackFill className="h-full w-full" />
        </button>
      </div>
    </div>
  );
}

export default StandardTextAreaField;
