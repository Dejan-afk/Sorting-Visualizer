 export function getHeapSortAnimations(array) {
    const animations = [];
    if(array.length <= 1) return array;
    heapSortHelper(array, animations);
    return animations;
}

function heapSortHelper(array, animations){
    let size = array.length;
    for(let i = Math.floor(size / 2)-1; i >= 0; i--){
        max_heapify(array, size, i, animations);
    }
    for(let i = array.length - 1; i > 0; i--){
        animations.push([true,0,i]);
        swap(array, 0, i);
        size--;
        max_heapify(array, size, 0, animations);
    }
}

function max_heapify(array,size, index, animations){
    const left = 2 * index + 1;
    const right = left + 1;
    let max = index;

    if(left < size && array[left] > array[max]){
        //comparing elements
        animations.push([0,left, max]);
        animations.push([1,left, max]);
        max = left;
    }
    if(right < size && array[right] > array[max]){
        //comparing elements
        animations.push([0, right, max]);
        animations.push([1, right, max]);
        max = right;
    }
    if(max !== index){
        //swapping elements
        animations.push([true, index, max]);
        swap(array, index, max);
        max_heapify(array, size, max, animations);
    }
    return array;
}

function swap(array, indexOne, indexTwo){
    const temp = array[indexOne];
    array[indexOne] = array[indexTwo];
    array[indexTwo] = temp;
}
