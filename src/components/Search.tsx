import { Search, X } from "lucide-react";
import { useRef, useState } from "react";
import styles from "../scss/app.module.scss";

interface SearchItemProps {
	updateSearchValue: (value: string) => void;
}

const SearchItem: React.FC<SearchItemProps> = ({ updateSearchValue }) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [localValue, setLocalValue] = useState("");

	const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setLocalValue(e.target.value);
		updateSearchValue(e.target.value);
	};

	const onClickClear = () => {
		setLocalValue("");
		updateSearchValue("");
		inputRef.current?.focus();
	};

	return (
		<>
			<div className={styles.search__container}>
				<Search className={styles.search__loupeIcon} />
				<input
					type="text"
					ref={inputRef}
					placeholder="Painting title"
					className={`${styles.search__input} ${localValue ? styles.filled : ""}`}
					value={localValue}
					onChange={onChangeInput}
				/>
				{localValue && (
					<X className={styles.search__clearIcon} onClick={onClickClear} />
				)}
			</div>
		</>
	);
};

export default SearchItem;
