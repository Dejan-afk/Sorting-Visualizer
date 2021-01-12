export function getQuickSortAnimations(array){
    const animations = [];
    if(array.length <= 1) return array;
    quickSortHelper(array, 0, array.length-1, animations);
    return animations;
}

function quickSortHelper(mainArray, start, end, animations){
    
    if(start<end){
        const pivotIndex = partition(mainArray, start, end,  animations);
        quickSortHelper(mainArray, start, pivotIndex-1,  animations);
        quickSortHelper(mainArray, pivotIndex+1, end, animations);
    }
}

function partition(mainArray, start, end, animations){
    
    const pivotValue = mainArray[end];
    let index = start;
    for(let i = start; i < end; i++){
        //Two values we are comparing.
        animations.push([i,end]);
        animations.push([i, end]);
        if(mainArray[i] < pivotValue){
            //swapping elements
            animations.push([index, i]);
            [mainArray[i], mainArray[index]] = [mainArray[index], mainArray[i]];
            //Moving to next element
            index++;
        }
        else{
            animations.push([0,0])
        }
        animations.push([0,0]);
    }

    //Putting the pivot value in the middle
    animations.push([0,0], [0,0], [index,end], [0,0])
    swap(mainArray, index, end)
    return index;
    
}

function swap(array, indexOne, indexTwo){
    let temp = array[indexOne];
    array[indexOne] = array[indexTwo];
    array[indexTwo] = temp;
}